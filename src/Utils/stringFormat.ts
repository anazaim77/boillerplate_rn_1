const convertToRp = (
  value: string,
  withPrefix = true,
  emptyDot = false,
  rounding = false,
) => {
  if (!value) {
    return withPrefix ? 'Rp. -' : '0'
  }
  let result = ''
  const valueArr = value.toString().split('.')
  const valueFirst = valueArr[0].split('').reverse().join('')
  const valueSecond = valueArr[1]

  for (let i = 0; i < valueFirst.length; i++) {
    if (i % 3 === 0) {
      result += valueFirst.substr(i, 3) + '.'
    }
  }
  const resultFinal =
    (withPrefix ? 'Rp ' : '') +
    result
      .split('', result.length - 1)
      .reverse()
      .join('')

  if ((!emptyDot && !valueSecond) || rounding) {
    return resultFinal
  }
  if (emptyDot && !valueSecond && value.includes('.')) {
    return resultFinal + ','
  }

  return (
    resultFinal +
    (valueSecond
      ? `.${Number(`0.${valueSecond}`)
          .toString()
          .replace('0.', '')
          .substring(0, 2)}`
      : '')
  )
}

const convertRpToNum = (value: string) => {
  let result = ''
  const valueArr = value.toString().split(',')
  const num = valueArr[0].split('.').join('')
  result = parseInt(num || '0', 10).toString()
  if (value.includes(',')) {
    result += '.'
    if (valueArr[1]) {
      if (valueArr[1].includes(',')) {
        result += valueArr[1].replace(',', '')
      } else {
        result += valueArr[1]
      }
    }
  }
  return result
}

const simplifyMoney = (value: string) => {
  const valueNumber = Number(value)
  let valueFormatted = ''
  if (valueNumber >= 1000000000000) {
    valueFormatted = `${valueNumber / 1000000000000} T`
  } else if (valueNumber > 1000000000) {
    valueFormatted = `${valueNumber / 1000000000000} M`
  } else if (valueNumber >= 1000000) {
    valueFormatted = `${valueNumber / 1000000} Jt`
  } else if (valueNumber >= 10000) {
    valueFormatted = `${valueNumber / 1000} Rb`
  }
  return `Rp. ${valueFormatted}`
}

const numberToTime = (time: number) => {
  const date = new Date(null)
  date.setSeconds(time)
  const isoDate = date.toISOString().substr(11, 8)
  if (isoDate.substring(0, 2) === '00') {
    return isoDate.substring(3)
  }
  return isoDate
}

export default { convertToRp, simplifyMoney, convertRpToNum, numberToTime }

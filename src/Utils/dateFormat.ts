import moment from 'moment'

function fullDate(date?: string) {
  return moment(date).locale('id').format('dddd DD MMMM YYYY')
}

function simpleDate(date?: string) {
  return moment(date).locale('id').format('MMM, DD YYYY')
}
function dateDmY(date?: string) {
  return moment(date).locale('id').format('D MMM YYYY')
}

function dateMY(date?: string) {
  return moment(date).locale('id').format('MMMM YYYY')
}

function momentAgo(date?: string) {
  return moment(date).fromNow()
}

function year(date?: string) {
  return moment(date).locale('id').format('YYYY')
}

function dateDDMMYYYY(date?: string | null | undefined) {
  if (!date) return ''
  return moment(date).format('DD-MM-YYYY')
}

export default {
  fullDate,
  simpleDate,
  dateDmY,
  dateMY,
  momentAgo,
  year,
  dateDDMMYYYY,
}

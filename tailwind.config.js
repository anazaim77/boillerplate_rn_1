const { plugin } = require('twrnc')
const colors = require('./src/Config/colors').default

const spacing = 4

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        fill: {
          flex: 1,
        },
      })
    }),
  ],
  theme: {
    extend: {
      colors,
      borderRadius: {
        1: spacing,
        2: spacing * 2,
        3: spacing * 3,
        4: spacing * 4,
        5: spacing * 5,
        6: spacing * 6,
        7: spacing * 7,
        8: spacing * 8,
        9: spacing * 9,
        10: spacing * 10,
      },
      fontFamily: {
        'poppins-bold': 'Poppins-Bold',
        'fjalla-one': 'FjallaOne-Regular',
      },
    },
  },
}

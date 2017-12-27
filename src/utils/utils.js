// utils.js

import moment from 'moment'

function dateToString (date) {
  if (date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
  }
  return ''
}

// slice gives you back a new array
function reverse (array) {
  return array.slice().reverse()
}

export { dateToString, reverse }

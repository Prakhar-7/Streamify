export const API_KEY = import.meta.env.VITE_API_BASE_URL

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + 'M'
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + 'K'
  } else {
    return value
  }
}

// console.log('hiiiii')
// console.log('hiiiii')
// console.log(import.meta.env.VITE_SOME_KEY)
// console.log(import.meta.env.VITE_API_BASE_URL)

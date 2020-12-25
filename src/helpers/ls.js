export default function ls(key = null, defaultValue = null) {
  if (Jovertical.inServer()) {
    return null
  }

  if (key !== null) {
    return localStorage.getItem(key) || defaultValue
  }

  return {
    put: (...args) => localStorage.setItem(...args),
  }
}

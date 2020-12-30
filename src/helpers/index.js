Array.prototype.first = function () {
  return this.length > 0 ? this[0] : null
}

export function inServer() {
  return typeof window === 'undefined'
}

export function sleep(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function clone(object, properties = {}) {
  return Object.create(
    Object.getPrototypeOf(object),
    Object.getOwnPropertyDescriptors({ ...object, ...properties })
  )
}

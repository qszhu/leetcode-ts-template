declare global {
  interface Array<T> {
    last: T
    first: T
    isEmpty(): boolean
  }
}

Object.defineProperty(Array.prototype, 'last', {
  get: function last() {
    return this[this.length - 1]
  },
  set: function last(val) {
    this[this.length - 1] = val
  },
})

Object.defineProperty(Array.prototype, 'first', {
  get: function first() {
    return this[0]
  },
  set: function first(val) {
    this[0] = val
  },
})

Array.prototype.isEmpty = function () {
  return this.length === 0
}

export default Array

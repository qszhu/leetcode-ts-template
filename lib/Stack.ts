import Array from './Array'

export default class Stack<T> {
  private data: Array<T>

  constructor() {
    this.clear()
  }

  clear() {
    this.data = new Array<T>()
  }

  push(x: T) {
    this.data.push(x)
  }

  get length() {
    return this.data.length
  }

  isEmpty() {
    return this.data.isEmpty()
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data.last
  }
}

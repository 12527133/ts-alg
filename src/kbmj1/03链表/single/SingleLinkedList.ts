import { AbstractList } from '../abstractList'
import Node from '../Node'

export default class SingleLinkedList<E> extends AbstractList<E> {
  private first: Node<E> | null = null

  public clear(): void {
    this._size = 0
    this.first = null
  }

  public get(index: number): E | null {
    return this.node(index)?.element ?? null
  }

  public set(index: number, element: E): E | null {
    const node = this.node(index)
    if (node) {
      const oldElement = node.element
      node.element = element
      return oldElement
    }
    return null
  }

  public add(index: number, element: E): void {
    this.rangeCheckForAdd(index)
    if (index === 0) {
      this.first = new Node<E>(null, element, this.first)
    } else {
      const prev = this.node(index - 1)
      if (prev) {
        prev.next = new Node<E>(null, element, prev.next)
      }
    }
    // const prev = index === 0 ? this.first : this.node(index - 1)
    // prev!.next = new Node<E>(null, element, prev?.next)
    // this._size++
  }

  public remove(index: number): E | null {
    this.rangeCheck(index)
    const node = this.first
    if (index === 0) {
      this.first = this.first ? this.first.next : null
    } else {
      const prev = this.node(index - 1)
      if (prev) {
        prev.next = prev.next ? prev.next.next : null
      }
    }
    this._size--
    return node ? node.element : null
  }

  public indexOf(element: E): number {
    if (element === null) {
      let current = this.first
      for (let i = 0; i < this._size && current; i++) {
        if (current.element === null) {
          return i
        }
        current = current.next
      }
    } else {
      let current = this.first
      for (let i = 0; i < this._size && current; i++) {
        if (current.element == element) {
          return i
        }
        current = current.next
      }
    }
    return -1
  }

  private node(index: number): Node<E> | null {
    this.rangeCheck(index)
    let current = this.first
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next
    }
    return current
  }

  public toString(): string {
    let result = 'size: ' + this._size + ', elements: '

    let current = this.first
    for (let i = 0; i < this._size && current; i++) {
      if (i !== 0) {
        result += ' , '
      }
      result += current.element?.toString()
      current = current.next
    }
    return result
  }
}

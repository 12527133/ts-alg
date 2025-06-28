//此时 Node 是模块内私有的（如果不加 export），等价于默认私有访问权限。
/*class Node<E> {
  public element: E
  public prev: Node<E> | null = null // 这里有个拼写错误，应该是 public
  public next: Node<E> | null = null // public next: Node<E> | null;
  constructor(prev: Node<E> | null, element: E, next: Node<E> | null = null) {
    this.prev = prev
    this.element = element
    this.next = next
  }

  public toString(): string {
    return `${this.prev?.element}_${this.element}_${this.next?.element}`
  }
}*/

import { AbstractList } from './abstractList'
import Node from './Node'
export default class LinkedList<E> extends AbstractList<E> {
  /*这种方式 Node不能用泛型
        private Node = class {
            public element: E;
            public next: Node | null; // 类型Node<E>只能改成 Node
            constructor(element: E, next: Node | null = null) {
                this.element = element;
                this.next = next;
            }
        }
    */
  // LinkedList 类实现了 AbstractList 接口
  private first: Node<E> | null = null
  private last: Node<E> | null = null

  public clear(): void {
    this.first = null
    this.last = null
    this._size = 0
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

  private node(index: number): Node<E> | null {
    this.rangeCheck(index)
    if (index < this._size >> 1) {
      let current = this.first
      for (let i = 0; i < index && current !== null; i++) current = current.next
      return current
    } else {
      let current = this.last
      for (let i = this._size - 1; i > index && current !== null; i--)
        current = current.prev
      return current
    }
  }

  public add(index: number, element: E): void {
    this.rangeCheckForAdd(index)
    if (index === this._size) {
      const oldLast = this.last
      this.last = new Node<E>(oldLast, element, null)
      if (oldLast === null) {
        this.first = this.last // 如果链表为空，first 也指向新节点
      } else {
        oldLast.next = this.last // 将旧的最后一个节点的 next 指向新节点
      }
    } else {
      let next = this.node(index)
      let prev = next?.prev ?? null
      const newNode = new Node<E>(prev, element, next)
      next!.prev = newNode // 更新 next 的 prev 指向新节点

      if (prev === null) {
        this.first = newNode // 如果 prev 是 null，说明新节点是第一个节点
      } else {
        prev.next = newNode // 更新 prev 的 next 指向新节点
      }
    }
    this._size++
  }

  public addElement(element: E): void {
    this.add(this._size, element)
  }

  public remove(index: number): E | null {
    this.rangeCheck(index)
    let node = this.node(index)
    if (node === null) return null

    const prev = node.prev
    const next = node.next

    if (prev === null) {
      this.first = next // 如果是第一个节点，更新 first
    } else {
      prev.next = next // 更新前一个节点的 next
    }

    if (next === null) {
      this.last = prev // 如果是最后一个节点，更新 last
    } else {
      next.prev = prev // 更新后一个节点的 prev
    }

    this._size--
    return node.element
  }

  public indexOf(element: E): number {
    // 实现查找逻辑...
    if (element === null) {
      let node = this.first
      for (let i = 0; i < this._size && node !== null; i++) {
        if (node.element === null) return i
        node = node.next
      }
    } else {
      let node = this.first
      for (let i = 0; i < this._size && node !== null; i++) {
        if (node.element === element) return i
        node = node.next
      }
    }
    return -1
  }

  public toString(): string {
    let result = 'linkList size: ' + this._size + ', elements: '
    let current = this.first
    while (current !== null) {
      result += current.toString() + (current.next ? ' -> ' : '')
      current = current.next
    }
    return result
  }
}

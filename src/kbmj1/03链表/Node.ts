export default class Node<E> {
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
}

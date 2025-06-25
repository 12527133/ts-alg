console.log("Hello World 03链接表");

export default class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
    toString(): string {
        return `ListNode { val: ${this.val}, next: ${this.next ? this.next.toString() : 'null'} }`;
    }
}
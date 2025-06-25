import { AbstractList } from "./abstractList";

export default class ArrayList<E> extends AbstractList<E> {
    private elements: E[] = [];
    private static readonly DEFAULT_CAPACITY: number = 10;

    constructor(initialCapacity: number = ArrayList.DEFAULT_CAPACITY) {
        super();
        const capacity = Math.max(initialCapacity, ArrayList.DEFAULT_CAPACITY);
        this.elements = new Array<E>(capacity);
    }

    public clear(): void {
        this.elements.forEach((_, index) => {
            this.elements[index] = null as any; // 使用 null 代替 undefined
        });
        this._size = 0;
    }
  
    public get(index: number): E  {
        this.rangeCheck(index);
        return this.elements[index];
    }

    public set(index: number, element: E): E  {
        this.rangeCheck(index);
        const oldValue = this.elements[index];
        this.elements[index] = element;
        return oldValue;
    }

    public add(index: number, element: E): void {
        /*
		 * 最好：O(1)
		 * 最坏：O(n)
		 * 平均：O(n)
		 */
		this.rangeCheckForAdd(index);
		this.ensureCapacity(this._size + 1);
        for (let i = this._size; i > index; i--) {
            this.elements[i] = this.elements[i - 1];
        }
        this.elements[index] = element;
        this._size++;
    }

    public remove(index: number): E  {
        this.rangeCheck(index);
        const oldValue = this.elements[index];
        for (let i = index + 1; i < this._size; i++) {
            this.elements[i - 1] = this.elements[i];
        }
        this.elements[this._size - 1] = null as any;
        this._size--;
        return oldValue;
    }

    public indexOf(element: E | null): number {
        for (let i = 0; i < this._size; i++) {
            if (this.elements[i] === element) {
                return i;
            }
        }
        return -1;
    }

    private  ensureCapacity(capacity: number): void {
        let oldCapacity = this.elements.length;
        if (oldCapacity >= capacity) return;

        let newCapacity = oldCapacity + (oldCapacity >> 1); // 扩容为原来的1.5倍
        let newElements = new Array<E>(newCapacity);
        for (let i = 0; i < this._size; i++) {
            newElements[i] = this.elements[i];
        }
        this.elements = newElements;
        console.log(`扩容：${oldCapacity} => ${newCapacity}`);

    }

    public toString(): string {
        let str = 'size: ' + this._size + ', elements: [';
        for (let i = 0; i < this._size; i++) {
            str += this.elements[i];
            if (i < this._size - 1) {
                str += ', ';
            }
        }
        str += ']';
        return str;
    }
}
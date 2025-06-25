import List from "./list";

export abstract class AbstractList<E> implements List<E> {
  
    protected _size: number = 0;

    public size(): number {
        return this._size;
    }

    public isEmpty(): boolean {
        return this._size === 0;
    }

    public contains(element: E): boolean {
        return this.indexOf(element) !== -1;
    }

    public addElement(element: E): void{
        this.add(this._size, element);
    }

    protected outOfBounds(index: number): void {
        throw new Error(`Index: ${index}, Size: ${this._size}`);
    }

    protected rangeCheck(index: number): void {
        if (index < 0 || index >= this._size) {
            this.outOfBounds(index);
        }
    }
    protected rangeCheckForAdd(index: number): void {
        if (index < 0 || index > this._size) {
            this.outOfBounds(index);
        }
    }

    // 由于 indexOf 是在子类中实现的方法，应在抽象类中将其声明为 抽象方法（abstract method），以告知子类必须实现该方法。
    public abstract indexOf(element:E): number;
    public abstract get(index:number): E | null;
    public abstract set(index:number,element:E): E | null;
    public abstract clear(): void;
    public abstract remove(index:number): E | null;
    /*
        报错原因：
        你定义了两个 add 方法：一个非抽象的 add(element: E)，另一个是抽象的 add(index: number, element: E): void。TypeScript 认为这两个方法签名不兼容，因为它们属于同一个重载组但性质不同（一个有实现，一个是抽象）。
    
        提供修复建议：
        将两个 add 方法合并为一个具有默认参数的抽象方法。
        在抽象类中只保留一个抽象 add 方法，并在子类中提供具体实现。
        移除非抽象的 add(element: E) 实现，将其逻辑放在子类中处理默认索引添加。
        public add(element: E): void{
            this.add(this._size, element);
        }
        public abstract add(index: number, element: E): void;
    */
    /* 
    1.方案一：修改为抽象方法，统一处理带 index 和不带 index 的情况（通过子类实现）
    2.方案二：也可以将本类的实际 add 方法换个名字，比如用本类的addElement替代
    */
    public abstract add(...args:[element:E] | [index: number, element: E]): void;
}
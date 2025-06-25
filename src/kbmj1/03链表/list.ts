import { clear } from "console";

export const ELEMENT_NOT_FOUND:number = -1;

export default interface List<E> {

    clear():void;
    size():number;
    isEmpty():boolean;
    contains(element:E):boolean;
    add(element:E):void;
    add(index:number, element:E):void;
    remove(index:number):E | null;

    get(index:number):E | null;
    set(index:number, element:E):E | null;
    indexOf(element:E):number;
}
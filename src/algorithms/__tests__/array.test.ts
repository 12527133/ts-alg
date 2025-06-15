import { ArrayAlgorithms } from '../arrayDemo/array';

describe('ArrayAlgorithms', () => {
    let arrayAlgo: ArrayAlgorithms;
    
    beforeEach(() => {
        arrayAlgo = new ArrayAlgorithms();
    });
    
    describe('sum', () => {
        test('应该正确计算数组的和', () => {
            expect(arrayAlgo.sum([1, 2, 3, 4, 5])).toBe(15);
            expect(arrayAlgo.sum([])).toBe(0);
            expect(arrayAlgo.sum([10])).toBe(10);
            expect(arrayAlgo.sum([-1, -2, -3])).toBe(-6);
        });
    });
    
    describe('findMax', () => {
        test('应该找到数组中的最大值', () => {
            expect(arrayAlgo.findMax([1, 5, 3, 9, 2])).toBe(9);
            expect(arrayAlgo.findMax([10])).toBe(10);
            expect(arrayAlgo.findMax([-5, -1, -10])).toBe(-1);
        });
        
        test('空数组应该抛出错误', () => {
            expect(() => arrayAlgo.findMax([])).toThrow('数组不能为空');
        });
    });
    
    describe('findMin', () => {
        test('应该找到数组中的最小值', () => {
            expect(arrayAlgo.findMin([1, 5, 3, 9, 2])).toBe(1);
            expect(arrayAlgo.findMin([10])).toBe(10);
            expect(arrayAlgo.findMin([-5, -1, -10])).toBe(-10);
        });
        
        test('空数组应该抛出错误', () => {
            expect(() => arrayAlgo.findMin([])).toThrow('数组不能为空');
        });
    });
    
    describe('reverse', () => {
        test('应该正确反转数组', () => {
            expect(arrayAlgo.reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
            expect(arrayAlgo.reverse([])).toEqual([]);
            expect(arrayAlgo.reverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
        });
    });
    
    describe('removeDuplicates', () => {
        test('应该移除重复元素', () => {
            expect(arrayAlgo.removeDuplicates([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
            expect(arrayAlgo.removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
            expect(arrayAlgo.removeDuplicates([])).toEqual([]);
        });
    });
    
    describe('intersection', () => {
        test('应该找到两个数组的交集', () => {
            expect(arrayAlgo.intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
            expect(arrayAlgo.intersection(['a', 'b'], ['b', 'c'])).toEqual(['b']);
            expect(arrayAlgo.intersection([1, 2], [3, 4])).toEqual([]);
        });
    });
    
    describe('rotateArray', () => {
        test('应该正确旋转数组', () => {
            expect(arrayAlgo.rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
            expect(arrayAlgo.rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
            expect(arrayAlgo.rotateArray([1, 2, 3], 5)).toEqual([2, 3, 1]); // k > length
            expect(arrayAlgo.rotateArray([], 3)).toEqual([]);
        });
    });
});
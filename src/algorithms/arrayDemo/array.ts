/**
 * 数组相关算法
 */
export class ArrayAlgorithms {
    
    /**
     * 计算数组元素的和
     * @param arr 输入数组
     * @returns 数组元素的和
     */
    sum(arr: number[]): number {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i]; // 在这里设置断点测试
        }
        return total;
    }
    
    /**
     * 查找数组中的最大值
     * @param arr 输入数组
     * @returns 最大值
     */
    findMax(arr: number[]): number {
        if (arr.length === 0) {
            throw new Error('数组不能为空');
        }
        
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]; // 断点：观察最大值更新过程
            }
        }
        return max;
    }
    
    /**
     * 查找数组中的最小值
     * @param arr 输入数组
     * @returns 最小值
     */
    findMin(arr: number[]): number {
        if (arr.length === 0) {
            throw new Error('数组不能为空');
        }
        
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
    
    /**
     * 反转数组
     * @param arr 输入数组
     * @returns 反转后的数组
     */
    reverse<T>(arr: T[]): T[] {
        const result: T[] = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i]); // 断点：观察反转过程
        }
        return result;
    }
    
    /**
     * 移除数组中的重复元素
     * @param arr 输入数组
     * @returns 去重后的数组
     */
    removeDuplicates<T>(arr: T[]): T[] {
        const seen = new Set<T>();
        const result: T[] = [];
        
        for (const item of arr) {
            if (!seen.has(item)) {
                seen.add(item);
                result.push(item); // 断点：观察去重过程
            }
        }
        
        return result;
    }
    
    /**
     * 查找两个数组的交集
     * @param arr1 第一个数组
     * @param arr2 第二个数组
     * @returns 交集数组
     */
    intersection<T>(arr1: T[], arr2: T[]): T[] {
        const set1 = new Set(arr1);
        const result: T[] = [];
        
        for (const item of arr2) {
            if (set1.has(item) && !result.includes(item)) {
                result.push(item);
            }
        }
        
        return result;
    }
    
    /**
     * 旋转数组
     * @param arr 输入数组
     * @param k 旋转步数
     * @returns 旋转后的数组
     */
    rotateArray<T>(arr: T[], k: number): T[] {
        const n = arr.length;
        if (n === 0) return arr;
        
        k = k % n; // 处理 k 大于数组长度的情况
        if (k === 0) return [...arr];
        
        const result = [...arr];
        
        // 旋转逻辑
        for (let i = 0; i < n; i++) {
            const newIndex = (i + k) % n;
            result[newIndex] = arr[i]; // 断点：观察旋转过程
        }
        
        return result;
    }
}
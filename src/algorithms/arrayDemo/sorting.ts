/**
 * 排序算法实现
 */
export class SortingAlgorithms {
    
    /**
     * 冒泡排序
     * 时间复杂度: O(n²)
     * 空间复杂度: O(1)
     */
    bubbleSort(arr: number[]): number[] {
        const result = [...arr];
        const n = result.length;
        
        for (let i = 0; i < n - 1; i++) {
            // 标记这一轮是否有交换
            let swapped = false;
            
            for (let j = 0; j < n - i - 1; j++) {
                if (result[j] > result[j + 1]) {
                    // 交换元素
                    [result[j], result[j + 1]] = [result[j + 1], result[j]];
                    swapped = true; // 断点：观察交换过程
                }
            }
            
            // 如果没有交换，说明已经有序
            if (!swapped) break;
        }
        
        return result;
    }
    
    /**
     * 选择排序
     * 时间复杂度: O(n²)
     * 空间复杂度: O(1)
     */
    selectionSort(arr: number[]): number[] {
        const result = [...arr];
        const n = result.length;
        
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            
            // 找到最小元素的索引
            for (let j = i + 1; j < n; j++) {
                if (result[j] < result[minIndex]) {
                    minIndex = j; // 断点：观察最小值查找
                }
            }
            
            // 交换元素
            if (minIndex !== i) {
                [result[i], result[minIndex]] = [result[minIndex], result[i]];
            }
        }
        
        return result;
    }
    
    /**
     * 插入排序
     * 时间复杂度: O(n²)
     * 空间复杂度: O(1)
     */
    insertionSort(arr: number[]): number[] {
        const result = [...arr];
        
        for (let i = 1; i < result.length; i++) {
            const key = result[i];
            let j = i - 1;
            
            // 向后移动大于key的元素
            while (j >= 0 && result[j] > key) {
                result[j + 1] = result[j]; // 断点：观察元素移动
                j--;
            }
            
            result[j + 1] = key;
        }
        
        return result;
    }
    
    /**
     * 快速排序
     * 时间复杂度: 平均 O(n log n), 最坏 O(n²)
     * 空间复杂度: O(log n)
     */
    quickSort(arr: number[]): number[] {
        if (arr.length <= 1) {
            return [...arr];
        }
        
        return this.quickSortHelper([...arr], 0, arr.length - 1);
    }
    
    private quickSortHelper(arr: number[], low: number, high: number): number[] {
        if (low < high) {
            // 分区操作
            const pivotIndex = this.partition(arr, low, high);
            
            // 递归排序左右两部分
            this.quickSortHelper(arr, low, pivotIndex - 1);
            this.quickSortHelper(arr, pivotIndex + 1, high);
        }
        
        return arr;
    }
    
    private partition(arr: number[], low: number, high: number): number {
        const pivot = arr[high]; // 选择最后一个元素作为基准
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; // 断点：观察分区过程
            }
        }
        
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }
    
    /**
     * 归并排序
     * 时间复杂度: O(n log n)
     * 空间复杂度: O(n)
     */
    mergeSort(arr: number[]): number[] {
        if (arr.length <= 1) {
            return [...arr];
        }
        
        const mid = Math.floor(arr.length / 2);
        const left = this.mergeSort(arr.slice(0, mid));
        const right = this.mergeSort(arr.slice(mid));
        
        return this.merge(left, right);
    }
    
    private merge(left: number[], right: number[]): number[] {
        const result: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;
        
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] <= right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        
        // 添加剩余元素
        result.push(...left.slice(leftIndex));
        result.push(...right.slice(rightIndex));
        
        return result; // 断点：观察合并结果
    }
}
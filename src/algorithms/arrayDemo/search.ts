/**
 * 搜索算法实现
 */
export class SearchAlgorithms {
    
    /**
     * 线性搜索
     * 时间复杂度: O(n)
     * 空间复杂度: O(1)
     */
    linearSearch<T>(arr: T[], target: T): number {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                return i; // 断点：观察找到目标的时刻
            }
        }
        return -1; // 未找到
    }
    
    /**
     * 二分搜索 (适用于已排序数组)
     * 时间复杂度: O(log n)
     * 空间复杂度: O(1)
     */
    binarySearch(arr: number[], target: number): number {
        let left = 0;
        let right = arr.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (arr[mid] === target) {
                return mid; // 断点：找到目标
            } else if (arr[mid] < target) {
                left = mid + 1; // 断点：观察搜索范围缩小
            } else {
                right = mid - 1; // 断点：观察搜索范围缩小
            }
        }
        
        return -1; // 未找到
    }
    
    /**
     * 递归二分搜索
     */
    binarySearchRecursive(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number {
        if (left > right) {
            return -1; // 未找到
        }
        
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // 断点：递归找到目标
        } else if (arr[mid] < target) {
            return this.binarySearchRecursive(arr, target, mid + 1, right);
        } else {
            return this.binarySearchRecursive(arr, target, left, mid - 1);
        }
    }
    
    /**
     * 查找第一个出现的位置 (适用于有重复元素的排序数组)
     */
    findFirst(arr: number[], target: number): number {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (arr[mid] === target) {
                result = mid; // 记录当前位置
                right = mid - 1; // 继续向左搜索
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result; // 断点：观察第一次出现的位置
    }
    
    /**
     * 查找最后一个出现的位置 (适用于有重复元素的排序数组)
     */
    findLast(arr: number[], target: number): number {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (arr[mid] === target) {
                result = mid; // 记录当前位置
                left = mid + 1; // 继续向右搜索
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
    
    /**
     * 跳跃搜索
     * 时间复杂度: O(√n)
     * 空间复杂度: O(1)
     */
    jumpSearch(arr: number[], target: number): number {
        const n = arr.length;
        const step = Math.floor(Math.sqrt(n));
        let prev = 0;
        
        // 跳跃到目标可能所在的区间
        while (arr[Math.min(step, n) - 1] < target) {
            prev = step;
            step + Math.floor(Math.sqrt(n));
            
            if (prev >= n) {
                return -1; // 超出数组范围
            }
        }
        
        // 在找到的区间内进行线性搜索
        while (arr[prev] < target) {
            prev++;
            if (prev === Math.min(step, n)) {
                return -1; // 未找到
            }
        }
        
        if (arr[prev] === target) {
            return prev; // 断点：跳跃搜索找到目标
        }
        
        return -1;
    }
    
    /**
     * 插值搜索 (适用于均匀分布的排序数组)
     * 时间复杂度: 平均 O(log log n), 最坏 O(n)
     */
    interpolationSearch(arr: number[], target: number): number {
        let low = 0;
        let high = arr.length - 1;
        
        while (low <= high && target >= arr[low] && target <= arr[high]) {
            if (low === high) {
                return arr[low] === target ? low : -1;
            }
            
            // 插值公式
            const pos = low + Math.floor(
                ((target - arr[low]) / (arr[high] - arr[low])) * (high - low)
            );
            
            if (arr[pos] === target) {
                return pos; // 断点：插值搜索找到目标
            }
            
            if (arr[pos] < target) {
                low = pos + 1;
            } else {
                high = pos - 1;
            }
        }
        
        return -1;
    }
}
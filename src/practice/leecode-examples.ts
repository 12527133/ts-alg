/**
 * LeetCode 经典题目练习
 * 这些例子可以帮你熟悉调试技巧
 */

/**
 * 1. 两数之和 (Two Sum)
 * 给定一个整数数组 nums 和一个整数目标值 target
 * 请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标
 */
export function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            // 断点：找到答案时查看变量
            return [numMap.get(complement)!, i];
        }
        
        numMap.set(nums[i], i); // 断点：观察 Map 的构建过程
    }
    
    return []; // 没有找到
}

/**
 * 2. 回文数 (Palindrome Number)
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false
 */
export function isPalindrome(x: number): boolean {
    // 负数不是回文数
    if (x < 0) return false;
    
    const str = x.toString();
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // 断点：观察不匹配的字符
        }
        left++;
        right--; // 断点：观察指针移动
    }
    
    return true;
}

/**
 * 3. 罗马数字转整数 (Roman to Integer)
 * 罗马数字包含以下七种字符: I, V, X, L, C, D 和 M
 */
export function romanToInt(s: string): number {
    const romanMap = new Map([
        ['I', 1], ['V', 5], ['X', 10], ['L', 50],
        ['C', 100], ['D', 500], ['M', 1000]
    ]);
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const current = romanMap.get(s[i])!;
        const next = i + 1 < s.length ? romanMap.get(s[i + 1])! : 0;
        
        if (current < next) {
            result -= current; // 断点：观察减法规则
        } else {
            result += current; // 断点：观察加法规则
        }
    }
    
    return result;
}

/**
 * 4. 最长公共前缀 (Longest Common Prefix)
 * 编写一个函数来查找字符串数组中的最长公共前缀
 */
export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // 断点：观察前缀缩短过程
            if (prefix === '') return '';
        }
    }
    
    return prefix;
}

/**
 * 5. 有效的括号 (Valid Parentheses)
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
 */
export function isValid(s: string): boolean {
    const stack: string[] = [];
    const mapping = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    
    for (const char of s) {
        if (mapping.has(char)) {
            // 是右括号
            const topElement = stack.length === 0 ? '#' : stack.pop()!;
            if (mapping.get(char) !== topElement) {
                return false; // 断点：观察不匹配的情况
            }
        } else {
            // 是左括号
            stack.push(char); // 断点：观察栈的变化
        }
    }
    
    return stack.length === 0;
}

/**
 * 6. 合并两个有序链表 (Merge Two Sorted Lists)
 * 将两个升序链表合并为一个新的升序链表并返回
 */
export class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next; // 断点：观察链表构建过程
    }
    
    // 连接剩余的节点
    current.next = list1 || list2;
    
    return dummy.next;
}

/**
 * 7. 移除重复项 (Remove Duplicates from Sorted Array)
 * 给你一个有序数组 nums ，请你原地删除重复出现的元素
 */
export function removeDuplicates(nums: number[]): number {
    if (nums.length <= 1) return nums.length;
    
    let slow = 0;
    
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast]; // 断点：观察双指针移动
        }
    }
    
    return slow + 1;
}

/**
 * 8. 实现 strStr() (Find the Index of the First Occurrence)
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标
 */
export function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) return 0;
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++; // 断点：观察字符串匹配过程
        }
        
        if (j === needle.length) {
            return i; // 断点：找到匹配
        }
    }
    
    return -1;
}

/**
 * 9. 搜索插入位置 (Search Insert Position)
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引
 */
export function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1; // 断点：观察二分查找过程
        } else {
            right = mid - 1;
        }
    }
    
    return left; // 插入位置
}

/**
 * 10. 最大子数组和 (Maximum Subarray) - Kadane's Algorithm
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
 */
export function maxSubArray(nums: number[]): number {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        
        // 断点：观察动态规划过程
        console.log(`i=${i}, num=${nums[i]}, maxEndingHere=${maxEndingHere}, maxSoFar=${maxSoFar}`);
    }
    
    return maxSoFar;
}

// 测试函数
export function runLeetCodeExamples() {
    console.log('=== LeetCode 练习题测试 ===\n');
    
    // 1. 两数之和
    console.log('1. 两数之和:');
    console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
    
    // 2. 回文数
    console.log('\n2. 回文数:');
    console.log(isPalindrome(121)); // true
    console.log(isPalindrome(-121)); // false
    
    // 3. 罗马数字转整数
    console.log('\n3. 罗马数字转整数:');
    console.log(romanToInt('III')); // 3
    console.log(romanToInt('LVIII')); // 58
    
    // 4. 最长公共前缀
    console.log('\n4. 最长公共前缀:');
    console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
    
    // 5. 有效的括号
    console.log('\n5. 有效的括号:');
    console.log(isValid('()')); // true
    console.log(isValid('()[]{}')); // true
    console.log(isValid('(]')); // false
    
    // 10. 最大子数组和
    console.log('\n10. 最大子数组和:');
    console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
}
// runLeetCodeExamples();
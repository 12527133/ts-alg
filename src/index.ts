// 主入口文件 - 算法练习项目
import { ArrayAlgorithms } from './algorithms/arrayDemo/array'
import { SortingAlgorithms } from './algorithms/arrayDemo/sorting'
import { SearchAlgorithms } from './algorithms/arrayDemo/search'
import { runLeetCodeExamples } from './practice/leecode-examples'
import ArrayList from './kbmj1/03链表/ArrayList'
import LinkedList from './kbmj1/03链表/LinkedList'

function main() {
  testMyLinkedList()
}

function testMyLinkedList() {
  const myArrayList = new LinkedList<number>()
  myArrayList.addElement(1)
  myArrayList.addElement(2)
  myArrayList.addElement(3)
  myArrayList.addElement(4)
  myArrayList.addElement(5)
  myArrayList.addElement(6)
  myArrayList.addElement(7)
  myArrayList.addElement(8)
  myArrayList.addElement(9)
  myArrayList.addElement(10)
  myArrayList.addElement(11)
  myArrayList.addElement(12)
  myArrayList.addElement(13)
  myArrayList.addElement(14)
  myArrayList.addElement(15)
  console.log('初始列表:', myArrayList.toString())
  console.log('获取索引1的元素:', myArrayList.get(1)?.toString())

  myArrayList.set(1, 5)
  console.log('修改索引1的元素后:', myArrayList.toString())

  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  console.log('删除索引0的元素后:', myArrayList.toString())
}
function testMyArrayList() {
  const myArrayList = new ArrayList<number>()
  myArrayList.addElement(1)
  myArrayList.addElement(2)
  myArrayList.addElement(3)
  myArrayList.addElement(4)
  myArrayList.addElement(5)
  myArrayList.addElement(6)
  myArrayList.addElement(7)
  myArrayList.addElement(8)
  myArrayList.addElement(9)
  myArrayList.addElement(10)
  myArrayList.addElement(11)
  myArrayList.addElement(12)
  myArrayList.addElement(13)
  myArrayList.addElement(14)
  myArrayList.addElement(15)
  console.log('初始列表:', myArrayList)
  console.log('获取索引1的元素:', myArrayList.get(1))

  myArrayList.set(1, 5)
  console.log('修改索引1的元素后:', myArrayList)

  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  myArrayList.remove(0)
  console.log('删除索引0的元素后:', myArrayList)
}

function demo1FromCluade() {
  // 数组算法演示
  console.log('🚀 TypeScript 算法练习项目启动')

  // 测试数组算法
  console.log('\n=== 数组算法测试 ===')
  const arrayAlgo = new ArrayAlgorithms()

  const testArray = [1, 2, 3, 4, 5]
  console.log('原数组:', testArray)
  console.log('数组和:', arrayAlgo.sum(testArray))
  console.log('最大值:', arrayAlgo.findMax(testArray))
  console.log('反转后:', arrayAlgo.reverse([...testArray]))

  // 测试排序算法
  console.log('\n=== 排序算法测试 ===')
  const sortAlgo = new SortingAlgorithms()

  const unsortedArray = [64, 34, 25, 12, 22, 11, 90]
  console.log('待排序数组:', unsortedArray)

  // 冒泡排序
  const bubbleSorted = sortAlgo.bubbleSort([...unsortedArray])
  console.log('冒泡排序结果:', bubbleSorted)

  // 快速排序
  const quickSorted = sortAlgo.quickSort([...unsortedArray])
  console.log('快速排序结果:', quickSorted)

  // 测试搜索算法
  console.log('\n=== 搜索算法测试 ===')
  const searchAlgo = new SearchAlgorithms()

  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  const target = 7

  console.log('搜索数组:', sortedArray)
  console.log(
    `线性搜索 ${target}:`,
    searchAlgo.linearSearch(sortedArray, target)
  )
  console.log(
    `二分搜索 ${target}:`,
    searchAlgo.binarySearch(sortedArray, target)
  )

  console.log('\n✅ 所有测试完成！')
}
// 程序入口
if (require.main === module) {
  main()
}

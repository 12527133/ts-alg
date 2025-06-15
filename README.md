# TypeScript 算法练习项目

一个专为学习和练习算法而设计的 TypeScript 项目，支持 VSCode 断点调试。

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 运行项目

```bash
# 直接运行
npm run dev

# 或者使用 ts-node
npx ts-node src/index.ts
```

### 3. 开始调试

在 VSCode 中：
1. 打开任意 `.ts` 文件
2. 在代码行号左侧点击设置断点（红色圆点）
3. 按 `F5` 或点击调试按钮
4. 选择调试配置：
   - `Debug Current File` - 调试当前打开的文件
   - `Debug Main` - 调试主入口文件
   - `Debug Tests` - 调试测试文件

## 📁 项目结构

```
ts-algorithm-practice/
├── src/
│   ├── algorithms/           # 算法实现
│   │   ├── array.ts         # 数组算法
│   │   ├── sorting.ts       # 排序算法
│   │   ├── search.ts        # 搜索算法
│   │   └── __tests__/       # 测试文件
│   │       └── array.test.ts
│   └── index.ts             # 主入口文件
├── .vscode/
│   └── launch.json          # VSCode 调试配置
├── dist/                    # 编译输出目录
├── package.json
├── tsconfig.json           # TypeScript 配置
├── jest.config.js          # Jest 测试配置
└── README.md
```

## 🧩 包含的算法

### 数组算法 (ArrayAlgorithms)
- `sum()` - 计算数组元素和
- `findMax()` - 查找最大值
- `findMin()` - 查找最小值  
- `reverse()` - 反转数组
- `removeDuplicates()` - 去重
- `intersection()` - 求交集
- `rotateArray()` - 数组旋转

### 排序算法 (SortingAlgorithms)
- `bubbleSort()` - 冒泡排序 O(n²)
- `selectionSort()` - 选择排序 O(n²)
- `insertionSort()` - 插入排序 O(n²)
- `quickSort()` - 快速排序 O(n log n)
- `mergeSort()` - 归并排序 O(n log n)

### 搜索算法 (SearchAlgorithms)
- `linearSearch()` - 线性搜索 O(n)
- `binarySearch()` - 二分搜索 O(log n)
- `binarySearchRecursive()` - 递归二分搜索
- `findFirst()` - 查找第一个出现位置
- `findLast()` - 查找最后一个出现位置
- `jumpSearch()` - 跳跃搜索 O(√n)
- `interpolationSearch()` - 插值搜索

## 🐛 调试技巧

### 设置断点
1. **行断点**：点击行号左侧设置
2. **条件断点**：右键断点 → 编辑断点 → 添加条件
3. **日志断点**：右键断点 → 编辑断点 → 添加日志消息

### 调试面板使用
- **变量面板**：查看当前作用域的所有变量
- **监视面板**：添加表达式监视特定值
- **调用堆栈**：查看函数调用链
- **断点面板**：管理所有断点

### 调试快捷键
- `F5` - 开始/继续调试
- `F10` - 单步跳过
- `F11` - 单步进入
- `Shift+F11` - 单步跳出
- `Shift+F5` - 停止调试

## 🧪 运行测试

```bash
# 运行所有测试
npm test

# 运行测试并生成覆盖率报告
npm test -- --coverage

# 监视模式运行测试
npm test -- --watch
```

## 📝 添加新算法

1. 在 `src/algorithms/` 目录下创建新的算法文件
2. 在 `src/algorithms/__tests__/` 下添加对应的测试文件
3. 在 `src/index.ts` 中导入并测试新算法

### 示例：添加新算法类

```typescript
// src/algorithms/tree.ts
export class TreeAlgorithms {
    // 你的树算法实现
}

// src/algorithms/__tests__/tree.test.ts
import { TreeAlgorithms } from '../tree';

describe('TreeAlgorithms', () => {
    // 测试用例
});
```

## 🔧 自定义配置

### 修改 TypeScript 配置
编辑 `tsconfig.json` 来调整编译选项

### 修改调试配置
编辑 `.vscode/launch.json` 来添加新的调试配置

### 修改测试配置
编辑 `jest.config.js` 来调整测试设置

## 📚 学习建议

1. **从简单开始**：先理解数组基本操作
2. **设置断点**：在关键位置设置断点观察算法执行过程
3. **理解复杂度**：注意每个算法的时间和空间复杂度
4. **写测试**：为每个算法编写测试用例
5. **逐步调试**：使用单步调试深入理解算法逻辑

## 🤝 贡献

欢迎提交 Pull Request 来添加新的算法或改进现有实现！

## 📄 许可证

MIT License
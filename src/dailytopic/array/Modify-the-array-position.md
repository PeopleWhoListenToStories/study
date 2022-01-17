---
icon: info
time: 2020-11-18
category: 基础
tags:
  - 学习
---

- [LeetCode 283] 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序 (必须在原数组上操作，不能拷贝额外的数组)

#### 示例 1：

```js
  输入：[0,2,0,6,5,0,1]
  输出：[2,6,5,1,0,0,0]
  解释：把元素为0的数放置数组末尾，不得创建新数组 。
```

> ### 题解 使用快慢指针

```js
function moveZeroes(nums: number[]): number[] {
  let fast: number = 0, // 快指针
    slow: number = 0 // 慢指针
  while (fast < nums.length) {
    // 如果当前项不是0
    if (nums[fast] != 0) {
      // 把当前的0 和下一个不为0的数替换位置
      //例如 fast = 1 时，nums[fast] != 0 成立 ，此时slow也为0
      //  [0,2,0,6,5,0,1]  被替换为 [2,0,0,6,5,0,1] //以此循环
      ;[nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      slow++ // 慢指针++
    }
    // 快指针++
    fast++
  }
  return nums
}
moveZeroes([0, 2, 0, 6, 5, 0, 1]) // [2, 6, 5, 1, 0, 0, 0]
```

> ### 题解 使用数组的 api 实现

```js
function moveZeroes(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
  return nums
}
moveZeroes([1, 0, 2, 0, -2, 32, 5, 0]) // [1, 2, -2, 32, 5, 0, 0, 0]
```

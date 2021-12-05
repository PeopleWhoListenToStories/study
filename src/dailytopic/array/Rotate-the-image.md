---
icon: info
time: 2020-11-18
category: Linux
tags:
  - 介绍
---

* 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。


#### 示例 1：
```js
  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  输出：[[7,4,1],[8,5,2],[9,6,3]]
  解释：顺时针旋转90deg
```

#### 示例 2：
```js
  输入：matrix = [[1,2],[3,4]]
  输出：[[3,1],[4,2]]
```


> ### 题解 使用map保存每一项的参数和下标

```js
function twoSum(nums: number[], target: number): number[] {
  let map = {}
  for(let key in nums){
    const current = target - nums[key]
    // 目标值target - 当前元素的值 如果在map中存在 就证明有两个相等了 直接return抛出
    if(map[current] !== undefined){
      return [map[current], Number(key)];
    }
    // 将当前数组的每一项值追加到map中 并保存下来他们的下标
    map[nums[key]] = Number(key)
  }  
}
twoSum([2, 7, 11, 15], 9) // [ 0, 1 ]
```

> ### 题解 使用数组的findIndex查找
```js
function twoSum(nums: number[], target: number): number[] {
  let current: number = 0
  for (let i = 0; i < nums.length; i++) {
    // 截取掉第一项 查找到相同的数据 然后给向前下标8把第一项截掉的位数补齐 得到当前数组的下标
    current = nums.slice(i + 1).findIndex(v => v === target - nums[i]) + i + 1
    // 如果当前数据和  保存的想吐数据不等 就证明成立 相等证明findIndex没有找到使用的是i的下标 所以会出现相等
    if (current !== i) {
      return [i, current]
    }
  }
}
twoSum([3, 2, 4], 6) // [1, 2]
```



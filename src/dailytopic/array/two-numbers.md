---
icon: info
time: 2020-11-18
category: Linux
tags:
  - 介绍
---

* 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

#### 示例 1：
```js
  输入：nums = [2,7,11,15], target = 9
  输出：[0,1]
  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

#### 示例 2：
```js
  输入：nums = [3,2,4], target = 6
  输出：[1,2]
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



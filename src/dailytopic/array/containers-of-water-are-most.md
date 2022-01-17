---
icon: info
time: 2020-11-19
category: 基础
tags:
  - 学习
---

- [LeetCode 11] 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

> 根据面积计算规则，面积是由两个柱子的距离和柱子最低高度决定的。所以，一开始前后指针指向第一根柱子和最后一根柱子，计算这两根柱子的面积，此时他们距离是最大的。由于高度收到最低的限制，所以前后指针中高度最低的往中间移动，知道找到比它高的柱子（因为距离在减少，所以只有高度增大才有机会比之前的大），再重新计算面积，并和前面的比较，取最大值。直到前后指针重合。

#### 示例 1：
```js
  输入：[1,8,6,2,5,4,8,3,7]
  输出：49 
  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

#### 示例 2：
```js
  输入：height = [4,3,2,1,4]
  输出：16
```


> ### 题解 使用双指针法

```js
function maxArea(nums) {
  let left = 0
  let right = nums.length - 1
  let max = 0
  while (left < right) {
    const area = (right - left) * Math.min(nums[right], nums[left])
    if (area > max) {
      max = area
    }
    if (nums[left] < nums[right]) {
      const l = nums[left]
      while (nums[left] <= l && left < right) {
        left++
      }
    } else {
      const r = nums[right]
      right--
      while (r >= nums[right] && left < right) {
        right--
      }
    }
    return max
  }
}
maxArea([4,3,2,1,4]) // 16
```




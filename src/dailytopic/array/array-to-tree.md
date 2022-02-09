---
icon: info
time: 2022-02-07
category: 基础
tags:
  - 学习
---

> 打平的数据内容如下

#### 示例 1：

```js
  输入：[
  { id: 1, name: '部门 1', pid: 0 },
  { id: 2, name: '部门 2', pid: 1 },
  { id: 3, name: '部门 3', pid: 1 },
  { id: 4, name: '部门 4', pid: 3 },
  { id: 5, name: '部门 5', pid: 4 },
]
  输出：[
  {
    id: 1,
    name: '部门 1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门 2',
        pid: 1,
        children: [],
      },
      {
        id: 3,
        name: '部门 3',
        pid: 1,
        children: [
          // 结果 ,,,
        ],
      },
    ],
  }
]
```

> ### 题解

```js
function ArrayToTree(args = []) {
  let memoMap = {} // 缓存的map集合
  let result = [] // 存放结果的数组
  for (let key of args) {
    const { id, pid } = key
    // 当前集合不存在 设置初始值 children元素
    if (!memoMap[id]) {
      memoMap[id] = {
        children: []
      }
    }

    // 给每一个键 赋值item元素
    memoMap[id] = {
      ...key,
      children: memoMap[id]['children']
    }
    // 获取到当前的item
    const treeItem = memoMap[id]
    // 如果为0 就是起始节点 直接push 进数组
    if (pid === 0) {
      result.push(treeItem)
    } else {
      // 判断 缓存的map 是否包含当前元素的父节点id （pid）,不包含 设置一个新的元素，包含 直接追加数据
      if (!memoMap[pid]) {
        memoMap[pid] = {
          children: []
        }
      }
      memoMap[pid]['children'].push(treeItem)
    }
  }
  return result
}
ArrayToTree([
  { id: 1, name: '部门 1', pid: 0 },
  { id: 2, name: '部门 2', pid: 1 },
  { id: 3, name: '部门 3', pid: 1 },
  { id: 4, name: '部门 4', pid: 3 },
  { id: 5, name: '部门 5', pid: 4 }
])
```

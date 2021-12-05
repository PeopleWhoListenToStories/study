---
icon: info
time: 2020-11-18
category: Linux
tags:
  - 介绍
---

* [LeetCode 5] 给你一个字符串 s，找到 s 中最长的回文子串。

#### 示例 1：
```js
  输入：s = "babad"
  输出： "bab"
  解释："aba" 同样是符合题意的答案
```

#### 示例 2：
```js
  输入：s = "cbbd"
  输出："bb"
```

> ### 题解 

```js
function longestPalindrome(s) {
  if (s.length < 2) {
    return s
  }
  let result = ''
  for (let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }

  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--
      n++
    }
    if (n - m - 1 > result.length) {
      result = s.slice(m + 1, n)
    }
  }
  return result
}
longestPalindrome('babad') // 'aba'
```





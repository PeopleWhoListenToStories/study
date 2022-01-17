---
icon: info
time: 2020-11-19
category: 基础
tags:
  - 学习
---

- [LeetCode ] 

> 队列是先入先出，栈是后入先出 设定两个栈stackA为入栈 和 stackB为出栈 ，stackA 入队无需判断 直接加入即可， 出队时需要先判断stackB出栈是否有无数据，有数据 先使用pop 将最前面的删除掉 没有 将statckA的数据 移入到 stackB


> ### 题解 

```js
  var CQueue = function() {
    this.stackA = [];
    this.stackB = [];
  };

  CQueue.prototype.appendTail = function(value) {
      this.stackA.push(value);
  };

  CQueue.prototype.deleteHead = function() {
      // 如果stackB此时有参数 先从他的头部删除，因为stackA后入的放stackB最下面 也就是尾部
      if(this.stackB.length){
          return this.stackB.pop();
      }else{
        // 负责就判断stackA是否存在数据 存在 将stackA的数据 从上最顶部的顺序开始push 到 stackB 中 如果stackB没有数据 直接return 负责 从顶部删除
          while(this.stackA.length){
              this.stackB.push(this.stackA.pop());
          }
          if(!this.stackB.length){
              return -1;
          }else{
              return this.stackB.pop();
          }
      }
  }
```




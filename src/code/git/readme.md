---
title: Git
icon: code
time: 2022-02-09
category: 前端
tags:
  - Git
---

## Git 使用大全

### Git提交

1. 将本地文件添加到暂存区
```shell
  git add . or git add 提交的文件名
```

2. 将本地文件提交到暂存区
```shell
  git commit -m "提交的信息"
```

3. 将本地暂存区的文件push到远程分支上
```js
  git push origin 分支名称
```

### Git 回滚
1. 已经提交，没有push
  - 1. 撤销commit 
  ```shell
    git reset --soft 这里是commitID
  ```
  - 2. 撤销commit和add两个动作
  ```shell
    git reset --mixed 这里是commitID
  ```
2. 已经提交，并且push到远程了
  - 1. 撤销并舍弃版本号之后的提交记录，(慎用，不会保存记录)
  ```shell
    git reset --hard 这里是commitID
  ```
  - 2. 撤销 但是会保存撤销记录
  ```shell
    git revert 这里是commitID
  ```



## 算法技巧

### 框架思维

#### 1. 数据结构存储方式

- 顺序存储
  - 优势:
    - 连续,节省内存
    - 索引随机访问
  - 缺陷
    - 为保持连续扩容,插入,删除要搬移旧数据
- 链式存储
  - 优势
    - 不连续,不需要考虑整体,插入删除仅关注附近的指针
  - 缺陷
    - 不连续,无法随机访问
    - 消耗更多的存储空间来存储指针
- 多样化
  - 队列:
  - 栈
  - 图
  - 散列表
  - 树
    - 二叉搜索树
    - AVL树
    - 红黑树
    - 区间树
    - B树

#### 2. 数据结构基本操作

- 基本操作
  - 数组遍历框架:线性迭代结构

  ```cpp
  void traverse(int[] arr){
     for (int i = 0; i < arr.length; i++) {
        // 迭代访问 arr[i]
    }
  }
  ```

  - 链表遍历框架:迭代和递归结构

  ```cpp
  class ListNode{
    int val;
    ListNode next;
  }

  void traverse(ListNode head){
    for(ListNode p=head;p!=null;p=p.next){
      //迭代访问 p.val
    }
  }
  void traverse(ListNode head){
    //递归访问 p.val
    traverse(head.next)
    //终止条件
  }
  ```

  - 二叉树遍历框架:非线性递归遍历结构

  ```cpp
  
  class TreeNode{
    int val;
    TreeNode left,right
  }
  // 递归遍历
  void traverse(TreeNode root){
    traverse(root.left)
    traverse(root.right)
  }
  ```
  
  ```cpp
  //N 叉树遍历
   class TreeNode{
    int val;
    TreeNode[] children
  }
  void traverse(TreeNode root){
    for(TreeNode child:root.children){
      //continue condition
      traverse(child)
      //end condition
    }
  }

  ```

  > N 叉树的遍历又可以扩展为图的遍历，因为图就是好几 N 叉棵树的结合体,图是可能出现环(用个布尔数组 visited 做标记)
  
  - 所谓框架，就是套路,这些代码都是永远无法脱离的结构，你可以把这个结构作为大纲，根据具体问题在框架上添加代码就行了

#### 3. 算法刷题指南

##### 二叉树

- 动态规划
- 回溯
- BFS
- 单链表
- 二分搜索
- 滑动窗口
- 股票买卖
- 打家劫舍
- nSum
- 二叉树专题
- 0-1背包
- git commond

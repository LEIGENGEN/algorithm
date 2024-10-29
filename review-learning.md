# 10.27
## require和import的区别

### 加载时机

- import是在编译时加载的，必须放在文件的开头
- require是在运行时加载的，可以放在代码的任何位置

### 所属规范

- import是ES6（2015）引入的关键字，属于ES模块化语法规范 -- 俄国十月革命（11）
- require是CommonJS规范的一部分，主要用于Node.js环境

### 动态绑定

- import提供静态分析，支持宏和类型检验
  - 宏 预处理指令
- require提供动态绑定，更适合服务器或浏览器环境

### 导入值的修改

- import导入的对象值被修改时，源对象也会被修改，相当于深拷贝
- require导入值被修改的时候，源对象不会被改变，相当于浅拷贝

### 使用区别

- import
  - 需要在文件夹中添加package.json文件

  ```js
  {
    "type": "module"
  }
  ```

```js
const tree = {}

// 第一种
export default tree
// 第二种
export {tree}
```

```js
import xx from ''
```

- require

```js
const tree = require('')
```

## 返回上一页保留查询条件

### 同一个页面切换不同视图，单页面中查询后点击详情，返回上一视图不想丢失查询条件

- vuex
- sessionStorage
- keep-alive

## element

### select

- 标签绑定的字段跟option绑定，修改绑定的值，自动就去会去修，不用修改option的值

### date-picker

- 使用element ui的date-picker组件，当使用了disable属性后，关闭这个属性再打开会没有值显示标签绑定的字段跟option绑定，修改绑定的值，自动就去会去修，不用修改option的值
  - 在blur事件使用this.forceUpdate

## 强制刷新

### this.$foreUpdate

- 某些情况下，即使数据发生了变化，组件的视图可以不会自动更新

  - 异步更新
  - 替换整个对象或数组，用新的对象或数组替换原来的对象或数组
- 强制组件更新
- 处理非响应式数据

  - 直接修改对象或数组的属性，该属性不是通过Vue.set方法添加的，无法检测这些变化
- 触发生命周期钩子函数

  - beforeUpdate和update
- 影响性能表现

  - 会跳过vue.js的性能优化机制

## 执行函数和立即执行函数
```js
const dfs=(()=>{})
const dfs=()=>{}
```
- 第一种是立即执行函数，dfs会被赋值，值为这个函数的返回值
  - 创建一个独立的作用域，避免变量污染全局作用域
- 第二种是箭头函数表达式
  - 没有argument
  - 没有自己的this
    - 箭头函数不会创建自己的this对象，只会继承在自己作用域的上一层this
  - 不能修改this指向
  - 没有prototype属性
  - 不能作为构造函数
    - 没有this，没有prototype属性
    - new 内部的实现
      - 创建一个新的空对象
      - 设置原型，将原型的对象设置为函数的prototype对象
      - 让函数的this指向这个对象，执行构造函数的代码
      - 返回新的对象
## 树
### 二叉树
- 使用Object模拟
  
### 完全二叉树
- 二叉树中，除了最后一层节点，其他都为满二叉树



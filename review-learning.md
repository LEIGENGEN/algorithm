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
 
### collapse
- 默认展开
  - 在collapse中v-model绑定一个值，在collapse-item中的name绑定同一个值

### table
- render-header：列标题Label区域渲染使用Function函数
  ```js
  <!-- 显示一个必填选项 -->
  addRedStar(h, { column }) {
      return [
        h("span", { style: "color: red" }, "*"),
        h("span", " " + column.label),
      ]
    },
  ```
- table实现多选
  - select 单写一个table-column

### 显示弹窗
```js
 this.$message({
    message: `插件名称：${name} 不能重复`,
    type: 'error',
    duration: 5000
});
```

### 默认打开开启
- 父组件添加v-model，子组件添加name，这两个的值对应要一样的

### 卸载列表同步
```html
<el-collapse v-model="itemFlag" />
<el-collapse-item name="1" /> 
 itemFlag = ['1']
```
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

# 10.28

## 事件总线eventBus
- 向外导出Vue实例
  - 规定好数据的收发方
   ```js
   Bus.$on
   Bus,$emit
   ```
- 引入mitt库，向外导出
  
## excel表格导出
- 其实后端就能单独实现


# 10.29

## 计算属性名语法
- 以一个对象的属性作为另一个对象的键和值
```js
const xx = {
  [obj.name]:obj.key
}
```

## v-model和:model区别
- v-model是v-model:value的缩写
  - 可以实现数据双向动态绑定
- :model是v-bind:model的缩写
  - 数据只能从父组件传递给子组件，但是子组件不能传给父组件，无法双向绑定

## 读取子节点的ref
- 子节点定义ref:child，父节点ref：chlidComponent
```js
this.$refs.chlidComponent.$refs.child
```

## v-html
- 如果是作为表单提交，会产生XSS攻击
  - 存储型（主要）
    - 将这个恶意代码提交到数据库，用户访问网站的时候，服务器读取数据库调出这段恶意代码
  - 反射型
    - 用户点击带有特定参数的链接，这个链接返回一段JS代码执行

## 在模板中添加 &nbsp;
- 插入一个不间断的空格，在HTML中保持其宽度，不会因为换行而断开
  - 防止换行
    - 不间断空格，浏览器渲染的时候不认为是换行点
  - 增加间距

# 10.30

## 数组

### 方法
- findIndex
  - 接受的是一个方法，回调函数
  ```js
  const ages = [3, 10, 18, 20];
  function checkAdult(age) {
    return age >= 18;
  }
  console.log(ages.findIndex(checkAdult)); // 输出结果：2
  ```
- pop
  - 删除数组最后一个
- push
  - 数组最后位置添加
- unshift
  - 在数组最前面添加
- shit
  - 删除数组第一个

### 循环中不希望第一项和第一项进行匹配
```js
this.fileTable.forEach((currentItem, currentIndex) => {
    let flag = this.fileTable.some((otherItem, otherIndex) => currentIndex !== otherIndex && currentItem.pluginName === otherItem.pluginName)
})
```

## 问题

### 当多选的时候，需要检测，当检测到相同的名字的，需要提示红框出来
```js
checkPluginUnique() {
  let flag_ = false
  let name = ''
  let processedPluginNames = new Set() 
  this.fileTable.forEach((currentItem, currentIndex) => {
      if (processedPluginNames.has(currentItem.pluginName)) return 
      let flag = this.fileTable.some((otherItem, otherIndex) => currentIndex !== otherIndex && currentItem.pluginName === otherItem.pluginName)
      let items = this.fileTable.filter((item) => item.pluginName === currentItem.pluginName) //这里是返回所有有相同的字段的
      console.log(processedPluginNames,"processedPluginNames",items);
      if (flag) {
          flag_ = true
          name = currentItem.pluginName
          items.forEach(item => item.checkUniqueVisible = true) 
          processedPluginNames.add(currentItem.pluginName) 
      } else  items.forEach(item => item.checkUniqueVisible = false) 
  })
  if (flag_) {
      this.$message({
          message: `插件名称：${name} 不能重复`,
          type: 'error',
          duration: 5000
      })
      return true
  } else return false
}, 
```

# 11.4

## 自定义指令
- 自定义指令，可以用来操作DOM
- 自定义指令的钩子函数
  - bind
    - 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置
  - inserted
    - 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）
  - update
    - 所在组件的VNode更新时调用，但是可能发生在其子VNode更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
```js
import store from '@/store'

export default {
  // `inserted` 钩子函数在绑定元素插入到 DOM 中时调用
  inserted(el, binding, vnode) {
    const { value } = binding; // 从绑定对象中解构出 `value`，即指令的绑定值
    const all_permission = "*:*:*"; // 定义一个常量 `all_permission`，表示拥有所有权限的标识符
    const permissions = store.getters && store.getters['user/perms'];//从 store 中获取用户的权限列表

    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value;
      const hasPermissions = permissions.some(permission => {
        return all_permission === permission || permissionFlag.includes(permission);
      });
      if (!hasPermissions) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`请设置操作权限标签值`);
    }
  }
}

```
```js
// 在main.js中写入
Vue.directive('hasPermi', hasPermi)
```

## mixins和hooks

- 使用方式
  - hooks是基于函数
  - mixins是基于选项对象
- 逻辑组合
  - hooks可通过多个hooks来实现复杂逻辑
  - mixins将多个选项对象混入组件来服用
- 合并策略
  - hooks没有合并策略，它们是独立的函数
  - mixins，当组件和mixin中有相同的选项时候，会有特定的合并策略来处理
    - 数据对象会被合并
    - 生命周期钩子函数会被合并成一个数组，并且都会被调用
- 使用版本
  - hooks是Vue3.0新增的，Vue2.0不支持
  - mixins是Vue2.0就有的，Vue3.0依然支持
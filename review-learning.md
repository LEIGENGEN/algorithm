# 10.27

## require 和 import 的区别

### 加载时机

- import 是在编译时加载的，必须放在文件的开头
- require 是在运行时加载的，可以放在代码的任何位置

### 所属规范

- import 是 ES6（2015）引入的关键字，属于 ES 模块化语法规范 -- 俄国十月革命（11）
- require 是 CommonJS 规范的一部分，主要用于 Node.js 环境

### 动态绑定

- import 提供静态分析，支持宏和类型检验
  - 宏 预处理指令
- require 提供动态绑定，更适合服务器或浏览器环境

### 导入值的修改

- import 导入的对象值被修改时，源对象也会被修改，相当于深拷贝
- require 导入值被修改的时候，源对象不会被改变，相当于浅拷贝

### 使用区别

- import

  - 需要在文件夹中添加 package.json 文件

  ```js
  {
    "type": "module"
  }
  ```

```js
const tree = {};

// 第一种
export default tree;
// 第二种
export { tree };
```

```js
import xx from "";
```

- require

```js
const tree = require("");
```

## 返回上一页保留查询条件

### 同一个页面切换不同视图，单页面中查询后点击详情，返回上一视图不想丢失查询条件

- vuex
- sessionStorage
- keep-alive

## element

### select

- 标签绑定的字段跟 option 绑定，修改绑定的值，自动就去会去修，不用修改 option 的值

### date-picker

- 使用 element ui 的 date-picker 组件，当使用了 disable 属性后，关闭这个属性再打开会没有值显示标签绑定的字段跟 option 绑定，修改绑定的值，自动就去会去修，不用修改 option 的值
  - 在 blur 事件使用 this.forceUpdate

### collapse

- 默认展开
  - 在 collapse 中 v-model 绑定一个值，在 collapse-item 中的 name 绑定同一个值

### table

- render-header：列标题 Label 区域渲染使用 Function 函数

  ```js
  <!-- 显示一个必填选项 -->
  addRedStar(h, { column }) {
      return [
        h("span", { style: "color: red" }, "*"),
        h("span", " " + column.label),
      ]
    },
  ```

- table 实现多选

  - select 单写一个 table-column

- default-active

  - 默认激活菜单的 index

- 固定高度

  - height 属性

### menu

- template #title（顶级菜单）
  - el-menu-item （次级菜单）
- 对于次级菜单，改变样式的时候，需要定义好相同的颜色，否则会出现闪烁的情况
- 左侧菜单占满整列，样式设置 height:100vh

  - 如果页面还有 header 组件，则需要凑合两者，使得两者之和为 100vh

- 封装 menu
  - 使用 ts
  - RouteRecordRaw 是 vue router 中的一个类型，用于定义路由记录的原始匹配对象

```js
// RouteRecordRaw 是 vue router 中的一个类型，用于定义路由记录的原始匹配对象
import { RouteRecordRaw } from "vue-router";

interface Props{
  routes:readonly RouteRecordRaw[]
}
```

- 菜单默认打开

```js
:default-openeds ="activeOpends"

const activeOpends = computed(()=>{
  return routes.value.filter(item=>{
    return item.children && item.children.length >0
  }).map(i=>i.path)
})
```

```css
.md-menu .md-menu-item {
  color: black !important;
  background: white !important;
}
.md-menu .md-menu-item.is-active {
  color: #2e95fb !important;
  background: white !important;
}
.md-sub-menu .md-sub-menu__title {
  color: black !important;
  background: white !important;
}
.md-sub-menu .md-sub-menu__title + .md-menu--inline .md-menu-item.is-active {
  color: #2e95fb !important;
  background: white !important;
}
```

- sidebar 在 table 使用的时候会被遮挡
- 自带设置 overflow hidden

```js
.md-scrollbar {
  /* 解决在hostManagement的时候，table必须要设置宽度 */
  overflow: visible;
}
```

### el-main

- 能够将主要区域都设置为一个整体，自适应剩下的区域

### 显示弹窗

```js
this.$message({
  message: `插件名称：${name} 不能重复`,
  type: "error",
  duration: 5000,
});
```

### 默认打开开启

- 父组件添加 v-model，子组件添加 name，这两个的值对应要一样的

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

  - 直接修改对象或数组的属性，该属性不是通过 Vue.set 方法添加的，无法检测这些变化

- 触发生命周期钩子函数

  - beforeUpdate 和 update

- 影响性能表现

  - 会跳过 vue.js 的性能优化机制

## 执行函数和立即执行函数

```js
const dfs = () => {};
const dfs = () => {};
```

- 第一种是立即执行函数，dfs 会被赋值，值为这个函数的返回值
  - 创建一个独立的作用域，避免变量污染全局作用域
- 第二种是箭头函数表达式
  - 没有 argument
  - 没有自己的 this
    - 箭头函数不会创建自己的 this 对象，只会继承在自己作用域的上一层 this
  - 不能修改 this 指向
  - 没有 prototype 属性
  - 不能作为构造函数
    - 没有 this，没有 prototype 属性
    - new 内部的实现
      - 创建一个新的空对象
      - 设置原型，将原型的对象设置为函数的 prototype 对象
      - 让函数的 this 指向这个对象，执行构造函数的代码
      - 返回新的对象

## 树

### 二叉树

- 使用 Object 模拟

### 完全二叉树

- 二叉树中，除了最后一层节点，其他都为满二叉树

# 10.28

## 事件总线 eventBus

- 向外导出 Vue 实例

  - 规定好数据的收发方

  ```js
  Bus.$on;
  Bus, $emit;
  ```

- 引入 mitt 库，向外导出

## excel 表格导出

- 其实后端就能单独实现

# 10.29

## 计算属性名语法

- 以一个对象的属性作为另一个对象的键和值

```js
const xx = {
  [obj.name]: obj.key,
};
```

## v-model 和:model 区别

- v-model 是 v-model:value 的缩写
  - 可以实现数据双向动态绑定
- :model 是 v-bind:model 的缩写
  - 数据只能从父组件传递给子组件，但是子组件不能传给父组件，无法双向绑定

## 读取子节点的 ref

- 子节点定义 ref:child，父节点 ref：chlidComponent

```js
this.$refs.chlidComponent.$refs.child;
```

## v-html

- 如果是作为表单提交，会产生 XSS 攻击
  - 存储型（主要）
    - 将这个恶意代码提交到数据库，用户访问网站的时候，服务器读取数据库调出这段恶意代码
  - 反射型
    - 用户点击带有特定参数的链接，这个链接返回一段 JS 代码执行

## 在模板中添加 &nbsp;

- 插入一个不间断的空格，在 HTML 中保持其宽度，不会因为换行而断开
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
  let flag = this.fileTable.some(
    (otherItem, otherIndex) =>
      currentIndex !== otherIndex &&
      currentItem.pluginName === otherItem.pluginName
  );
});
```

# 11.4

## 自定义指令

- 自定义指令，可以用来操作 DOM
- 自定义指令的钩子函数
  - bind
    - 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置
  - inserted
    - 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）
  - update
    - 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新

```js
import store from "@/store";

export default {
  // `inserted` 钩子函数在绑定元素插入到 DOM 中时调用
  inserted(el, binding, vnode) {
    const { value } = binding; // 从绑定对象中解构出 `value`，即指令的绑定值['cs:inspection:query']
    const all_permission = "*:*:*"; // 定义一个常量 `all_permission`，表示拥有所有权限的标识符
    const permissions = store.getters && store.getters["user/perms"]; //从 store 中获取用户的权限列表

    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value;
      const hasPermissions = permissions.some((permission) => {
        return (
          all_permission === permission || permissionFlag.includes(permission)
        );
      });
      if (!hasPermissions) {
        // 如果没有权限，则会移除该标签
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`请设置操作权限标签值`);
    }
  },
};
```

```js
// 在main.js中写入
Vue.directive("hasPermi", hasPermi);
```

## mixins 和 hooks

- 使用方式
  - hooks 是基于函数
  - mixins 是基于选项对象
- 逻辑组合
  - hooks 可通过多个 hooks 来实现复杂逻辑
  - mixins 将多个选项对象混入组件来服用
- 合并策略
  - hooks 没有合并策略，它们是独立的函数
  - mixins，当组件和 mixin 中有相同的选项时候，会有特定的合并策略来处理
    - 数据对象会被合并
    - 生命周期钩子函数会被合并成一个数组，并且都会被调用
- 使用版本
  - hooks 是 Vue3.0 新增的，Vue2.0 不支持
  - mixins 是 Vue2.0 就有的，Vue3.0 依然支持

## 创建一个文件导出多个组件

```js
export { default as AppMain } from "./AppMain";
//default 默认导出
//as 重命名导出的变量、函数、类或对象
```

# 11.5

## vuex

- actions
  - 第一个参数 commit
    - 用于提交 mutation 的方法
  - 第二个参数 payload
    - 传递给 mutation 的载荷 payload

```js
setPerms({ commit }, perms) {
  commit('SET_PERMS', perms);  // 提交 SET_PERMS mutation，设置用户的权限列表
}
```

- namespace:true
  - 启用命名空间
    - 向外导出的时候，模块所有 getter、action、mutation 都会加上模块名作为前缀
      - 避免命名冲突
      - 提高可读性
  - 访问的时候要加上命名空间的名字
    - 如果文件名是有下划线的形式，要变为驼峰写法
      - common_state - > commonState

```js
const is Collaspse = computed(()=>store.state.commonState.isCollaspse)
```

- 模块化
  - 调用的时候要加上模块名

```js
...mapGetters('commonState',collapse)
```

- vue2 使用
  - 引入 mapGetter，在 computed 中，而且使用的时候还需要知道
  - 使用 getter，就需要有定义的

```js
const getters = {
  //使用getter，就需要有定义的
  isCollapse: (state) => state.isCollapse,
  deployEnv: (state) => state.deployEnv,
};
```

- 有命名空间

```js
this.$store.commit("commonState/setDeployEnv", true);
```

## 对象进行遍历

- for in
  - 遍历对象所有可枚举属性
- object.keys()
  - 名称：返回一个包含对象自身可枚举属性名称的数组，然后使用 forEach

```js
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};
Object.keys(obj).forEach((key) => {
  console.log(key + ": " + obj[key]);
});
```

- object.value()
  - 值：返回一个包含对象自身可枚举属性值的数组，然后使用 forEach

```js
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};
Object.keys(obj).forEach((key) => {
  console.log(key + ": " + obj[key]);
});
```

- object.entries()
  - 键值对：返回一个包含对象自身可枚举属性键值对的数组，然后使用 forEach

```js
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
```

## replaceAll replace

- replaceAll() 方法用于在字符串中用新的子字符串替换所有匹配的子字符串

```js
const str = "Hello, world!";
const newStr = str.replaceAll("o", "a");
console.log(newStr); // 'Hella, warld!'
```

- replace 也可以替换所有匹配项，但是必须使用带有全局标志的正则表达式

```js
const str = "Hello world! Hello everyone!";
const newStr = str.replace(/Hello/g, "Hi");
console.log(newStr); // 输出: "Hi world! Hi everyone!"
```

## 保留查询参数之后，返回上一页应该携带参数重新刷新

# 11.6

## ref

- 使用 element-table 中的方法

```js
this.$refs.myTable.toggleRowSelection(item, true);
```

## 难点

- 对于 table 中部分选中列表全选
  - 因为全选是采用了一个循环每个添加，所以拿这个变量和新获得的数据进行比较，
    - 找出少了或者多了哪一条数据，如果查到这条数据中存在 children，
      - 增加
        - 对这个变量 children 全添加
      - 减少
        - 对这个 children 进行取消
- 当多选的时候，需要检测，当检测到相同的名字的，需要提示红框出来
- 对于次级菜单，改变样式的时候，需要定义好相同的颜色，否则会出现闪烁的情况

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

```css
.md-menu .md-menu-item {
  color: black !important;
  background: white !important;
}
.md-menu .md-menu-item.is-active {
  color: #2e95fb !important;
  background: white !important;
}
.md-sub-menu .md-sub-menu__title {
  color: black !important;
  background: white !important;
}
.md-sub-menu .md-sub-menu__title + .md-menu--inline .md-menu-item.is-active {
  color: #2e95fb !important;
  background: white !important;
}
```

- 数据不一致，延时，父组件获得的数据延时传入
  - 使用 watch，立即执行，深度监听，设置变量接收

```js
let menuListBak = reactive([]);
let fromList = reactive([]);
watch(
  () => props.menuList,
  (newVal) => {
    if (newVal) {
      Object.assign(menuListBak, newVal);
      Object.assign(fromList, splitFunList(menuListBak, props.splitNumber));
    }
  },
  { immediate: true, deep: true }
);
```

## git

- git revert
  - 删除一个提交，但是这个提交记录得是最新的

```js
  git revert <commit>
```

- git cherry-pick
  - 一个分支中选择特定的提交（commit）并将其应用到另一个分支

```js
  git cherry-pick <commit-hash>
```

## this.$route

- 用于在 Vue 组件中访问当前路由信息

```js
const routes = [
  {
    path: "/user/:id",
    name: "user",
    component: UserComponent,
  },
];
const router = new VueRouter({
  routes,
});

this.$route.params.id;
```

# 11.7

## 点击复制的实现

- 原生
  - 创建一个临时的 input 元素，并将需要复制的文本赋值给它。
  - 将 input 元素添加到文档中，使其成为可选中的元素。
  - 选中 input 元素中的文本。
  - 执行复制命令，将选中的文本复制到剪贴板。
  - 移除临时的 input 元素，清理 DOM。
  - 显示一条成功消息，提示用户复制操作已成功完成。

```js
// 原生
 copyHandle(value) {
      var input = document.createElement("input")
      input.value = value
      document.body.appendChild(input)
      input.select()
      document.execCommand("Copy")
      document.body.removeChild(input)
      this.$message({
        message: '复制成功！',
        type: 'success'
      })
    },
```

- vue3
  - navigator.clipboard
    - writeText() 方法用于将文本写入剪贴板
    - readText() 方法用于从剪贴板读取文本

```js
this.pastedText = await navigator.clipboard.readText();
```

## html

### section

- 定义文档中独立内容区域
- 和普通的 div 一样，但是语义化更强

### main

- 定义文档中主内容区域

## 项目搭建

### layout

- index 文件就是放置整个项目的结构，侧栏，上边，右边区域
  - 左侧菜单占满整列，样式设置 height:100vh
    - 如果页面还有 header 组件，则需要凑合两者，使得两者之和为 100vh

## less

- 文件里使用$
  - 在 less 中，$用于定义变量，提高可维护性
- 定义的 index.less 后缀文件中，引入其他 less 文件
  - 使用@import
    - 特定语法
      - 在编译的时候可以将多个 less 文件合并成一个 css 文件
    - 模块化
      - 可以将样式拆分为多个文件

## 文件代码块

```js
"Vue3-SFC": {
		"prefix": "v3",
		"body": [
			"<script setup lang=\"ts\">",
			"</script>",
			"",
			"<template>",
			"</template>",
			"",
			"<style scoped>",
			"</style>"
		],
		"description": "生成vue3文件结构"
	}
```

# 11.8

## vue3 可以有多个 onMounted，便于将一段相同逻辑的代码写在一起，执行顺序按照在代码中出现的顺序一致

## 获取路径时候的步骤

- 计算属性
  - 确保当前路由信息发生变化的时候，依赖这些信息的组件能够自动更新
    - 响应式更新
    - 性能优化
      - computed 会缓存其结果，只有在依赖的值发生变化的时候才会重新计算

```js
import { useRouter } from "vue-router";
const router = useRouter();

// 确保当前路由信息发生变化的时候，依赖这些信息的组件能够自动更新
const routes = computed(() => router.options.routes);
```

## ts 中定义 props

- 定义 interface
  - 用于定义对象那个结构的方式，用于描述对象的形状，包括对象的属性及其类型

```ts
// 定义props的类型
interface Props {
  title: string;
  count: number;
}

// 使用defineProps函数定义props
const props = defineProps<Props>();
```

- 封装 menu
  - 使用 ts
  - RouteRecordRaw 是 vue router 中的一个类型，用于定义路由记录的原始匹配对象

```js
// RouteRecordRaw 是 vue router 中的一个类型，用于定义路由记录的原始匹配对象
import { RouteRecordRaw } from "vue-router";

interface Props{
  routes:readonly RouteRecordRaw[]
}
```

## this.$nextTick

- vue 在更换 dom 的时候是异步执行的，如果是同步更新，会有损性能，当侦听到数据变化的时候，vue 将开启一个队列，缓冲在同一时间循环中所有数据变更
- 对于异步队列是采用 Promise.then、Mutation Observer 和 setTimeout 来匹配不同浏览器的策略

## 切换请求时候的域名和端口

```js
axios.create({
  baseURL: "http://xxx.xxx.xxx:22",
});
```

# 11.11

## vue-router

- vue 通过 router-view 来进行内容的展示，在 router 的 index 中，component 会根据 path 路径的不同来进行不同组件的加载

## watch 和 computed

- watch
  - 缓存
  - 页面刷新的时候立刻加载
  - 深度监听
  - 同步计算
    - 访问一个计算属性的时候，vue 会立即计算并返回结果，而不是异步地等待某个操作完成
      - 计算属性不会涉及到异步操作

## 获取路径

- 当前网页路径

```js
import { useRoute } from "vue-router";
import { computed } from "vue";
const router = useRoute();
const isHomeVisible = computed(() => router.path === "/home");
```

- 获取 router 中定义的路径

```js
import { useRouter } from "vue-router";
const router = useRouter();
router.options.routes;
```

## vite

```js
import.meta.env.VITE_URI_PREX;
```

- 在代码中访问环境变量
  - 通过环境变量配置项目的不同环境
- import.meta.env
  - 一个对象，包含所有以 VITE\_开头的环境变量

```js
# .env.development
VITE_URI_PREX=https://dev.api.example.com
# .env.production
VITE_URI_PREX=https://api.example.com
```

- 根据不同环境运行项目，vite 自动加载相应的环境变量

```js
# 开发环境
npm run dev

# 生产环境
npm run build
npm run serve
```

## 插槽

- 如果 slot-scope 中,scope 报错，换成 v-slot

```js
<md-table-column label="日期" width="120">
  <template slot-scope="scope">{{ scope.row.date }}</template>
  <template v-slot="scope">{{ scope.row.date }}</template>
</md-table-column>
```

- vue2
  - slot-scope
- vue3
  - v-slot
    - 可以省略 default 插槽名

## mock

- 使用的时候要引入

  - 要在 main.js 中引入

- @title
  - 会有空格导致报错，使用@sentence

```js
import "../mock/index";
```

- vite 中路径请求替换
  - rewrite: (path) => path.replace(/^\/api/, "/")：重写请求路径，将路径中的 /api 前缀替换为 /。例如，/api/ws/somepath 将被重写为 /ws/somepath。

```js
server: {
  proxy: {
    "/api/ws": {
      target: config.wsProxyUrl,
      rewrite: (path) => path.replace(/^\/api/, "/"),
      ws: true,
      changeOrigin: true,
    },
    // 此处本地开发代理
    "/api": {
      target: config.httpProxyUrl,
      rewrite: (path) => path.replace(/^\/api/, "/"),
    },
  },
}
```

## TS

- 定义数组变量
  - let tableData: Array<tableDataTs> 冒号

```ts
interface tableDataTs {
  ip: string;
  hostname: string;
  resource: string;
  os: string;
  cpu_arch: string;
  start_time: Date;
  state: number;
}
let tableData: Array<tableDataTs> = reactive([]);
```

# 11.12

- [...filterOsList.values()]
  - 可以将 map 的结果转为数组展开

## 跳转到目标路径

```js
let router = useRouter();
router.psuh({ name: "" });
```

```js
children: [
  {
    path: "/hostManagement",
    name: "hostManagement",
    meta: { title: "主机管理" },
    component: () => import("../pages/hostManagement/index.vue"),
    children: [
      {
        path: "/hostManagement/detailBatchOperation",
        name: "detailBatchOperation",
        component: () =>
          import(
            "../pages/hostManagement/detailBatchOperation/index.vue"
          ),
      },
    ],
  },
  {
    path: "/dataManagement",
    name: "dataManagement",
    meta: { title: "数据库管理" },
    component: null,
  },
],
```

## 路径传参

```js
router.push({ name: pageName, params: { targetHostNumber: 6 } });
```

- path: "/hostManagement/detailBatchOperation/:targetHostNumber",
  - ：
    - 这里的：，如果是路径有的话，那跳转的时候也必须带上，否则会报错

```js
const route = useRoute();
const targetHostNumber = computed(() => route.params.targetHostNumber);
```

# 11.14

- 代码编辑器 vue-codemirror

- router 跳转

```js
 // 这里的name需要和其他的不同，否则无法跳转！！！
{
  path: "/",
  name: "root",
  // name: "home",
  meta: { title: "首页" },
  redirect: "/home",
  // redirect: "/deploy/list",
},
```

- defineProps 不用显式地引入

- console.log 在浏览器中输出的是最后的结果，对于延时数据查找不到，但是 length 不会

## 11.15

### CMS

- 内部链接和外部链接
  - 通过 app-link 组件来跳转
    - a 标签
    - roter-link
- 多级菜单

  - 模板
    - 组件
      - 函数式组件 render
  - n 级菜单
    - 递归渲染

### path.resolve

- path.resolve
  - 会从右到左依次处理每个路径片段，直到构建出一个绝对路径。如果处理过程中遇到一个绝对路径，它会将之前的所有路径片段忽略，并从这个绝对路径开始构建最终的路径。

```js
const path = require("path");

const absolutePath = path.resolve("foo", "bar", "baz");
console.log(absolutePath); // 输出: /current/working/directory/foo/bar/baz
```

- defineEmits
  - 使用的时候需要先引入 import
  - 定义的时候是一个括号包裹的

```js
const emits = defineEimts(["nodeClick"]);
```

### 文件夹下都命名为 index.vue 原因

- 组织结构清晰
- 简化引入路径
  - JS 中导入模块的时候，如果文件名是 index，可以省略文件名字部分，只需要写文件夹路径
- 避免命名冲突
  - 大项目中，可能有多个组件或页面使用相同的名称

### svg

- 在二维平面中设置画布

## 10.17

- 发布-订阅模式

  - 发布者，订阅者，第三方
  - 事件总线
    - eventbus.on
    - eventbus.$emit
    - 写的函数定义在外面的原因
      - 删除自定义事件，防止内存泄露，在生命周期的销毁阶段执行

- map 方法

  - in 获取的是 key，value 所有可枚举
  - of 获取的是 value
  - entries
    - 获取的 key 和 value

```js
const values = myMap.values();
for (const value of values) {
  console.log(`Value: ${value}`);
}
```

- values
  - 获取 map 对象中所有值的迭代器

```js
const values = myMap.values();
for (const value of values) {
  console.log(`Value: ${value}`);
}
```

## 10.18

### 删除对象中的某一项

- delete

```js
object.delete.xx;
```

### span 是行内元素，不能放置块级元素

- 如果需要转换的话，需要修改样式
  - display:block

### 滚动条

```css
::-webkit-scrollbar {
  width: 3px;
  height: 1px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-track {
  background-color: #f6f6f6;
}

::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  border: 0;
}
```

### 根据开发/生产环境进行不同的引入

- 开发环境 require

  - 更快的热更新
    - 使用 require 语法可以更快的进行模块的热更新
    - 修改代码时，开发服务器可以更快的重新加载模块，而不需要重新编译整个应用
  - 即时反馈
    - 立即看到代码的修改效果

- 生产环境 import
  - 代码分割
    - import 语法支持动态导入
      - 可以将应用程序拆分为多个小的代码块（chunks），并需要按需加载
      - 减少初始加载时间
  - 懒加载
    - 用户需要时才加载特定的模块或组件
  - 更好的优化
    - 生产环境中可以对 import 语法进行更好的优化
      - 去除未使用的代码（Tree Shaking）
      - 压缩代码
    - 减少打包后的文件大小，提高应用的加载和运行性能

```js
const loadView = (view) => {
  if (!view) {
    return Layout;
  }
  if (process.env.NODE_ENV === "development") {
    return (resolve) => require([`@/views${view}`], resolve);
  } else {
    // 使用 import 实现生产环境的路由懒加载
    return () => import(`@/views${view}`);
  }
};
```

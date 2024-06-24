### 快速上手

::: tip 提示

基于 vue3 + ts + Element-plus 进行主题定制的基础组件

此部分文档仅涉及相关主题修改的组件，完整组件api文档详见element官方

:::


### element-plus使用
> #### 前提条件：使用项目必须全局注册 Element-plus组件库

```js
// main.ts
import { createApp } from 'vue'
import '../../public/css/jnplus.scss'  // 引入项目内主题样式文件
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
```

<a href="/subApp/uxstd/pcplus/css/jnplus.scss" download target="_blank">element-plus自定义主题文件下载</a>

### element-ui使用

```js
import ElementUI from 'element-ui'
import '@/assets/styles/mytheme/index.css' // 引入项目内主题样式包index.css
Vue.use(ElementUI)
```
<a href="/subApp/uxstd/pcplus/css/mytheme.zip" download target="_blank">element-ui自定义主题包下载</a>
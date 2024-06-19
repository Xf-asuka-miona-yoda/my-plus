import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'elementPlus基础组件文档',
  description: '基于Element-plus基础组件江南主题定制',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: '基础组件文档',
    outlineTitle: '快速浏览',
    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/button.md' },
    ],
    sidebar: {
      '/components': [
        {
          text: '安装指南',
          items: [
            { text: '安装指南', link: '/components/' },
          ],
        },
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button.md' },
            { text: 'Container 布局容器', link: '/components/container.md' },
            { text: 'Layout 布局', link: '/components/layout.md' },
            { text: 'Text 文本', link: '/components/text.md' },
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
        {
          text: 'Form 表单组件',
          items: [
            { text: 'Autocomplete', link: '/components/autocomplete.md' },
            { text: 'Cascader 级联选择器', link: '/components/cascader.md' },
            { text: 'Checkbox 多选框', link: '/components/checkbox.md' },
            { text: 'DatePicker 日期选择器', link: '/components/date-picker.md' },
            { text: 'DateTimePicker', link: '/components/datetime-picker.md'},
            { text: 'Form 表单', link: '/components/form.md'},
            { text: 'Input 输入框', link: '/components/input.md'},
            { text: 'Input Number', link: '/components/input-number.md'},
            { text: 'Radio 单选框', link: '/components/radio.md'},
            { text: 'Select 选择器', link: '/components/select.md'},
            { text: 'Virtualized Select', link: '/components/select-v2.md'},
            { text: 'Slider 滑块', link: '/components/slider.md'},
            { text: 'Switch 开关', link: '/components/switch.md'},
            { text: 'TimePicker 时间选择器', link: '/components/time-picker.md'},
            { text: 'TimeSelect 时间选择', link: '/components/time-select.md'},
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
        {
          text: 'Data 数据展示',
          items: [
            { text: 'Avatar 头像', link: '/components/avatar.md' },
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
        {
          text: 'Navigation 导航',
          items: [
            { text: 'Affix 固钉', link: '/components/affix.md' },
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
        {
          text: 'Feedback 反馈组件',
          items: [
            { text: 'Alert 提示', link: '/components/alert.md' },
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
})

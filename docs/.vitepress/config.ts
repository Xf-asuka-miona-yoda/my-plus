import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'elementPlus主题定制文档',
  description: '基于Element-plus基础组件江南主题定制',
  lang: 'cn-ZH',
  base: '/subApp/uxstd/pcplus/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: '基础组件文档',
    outlineTitle: '快速浏览',
    nav: [
      {
        text: '引入指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/button.md' },
    ],
    sidebar: {
      '/components': [
        {
          text: '引入指南',
          items: [
            { text: '引入指南', link: '/components/' },
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
            { text: 'Autocomplete 自动补全输入', link: '/components/autocomplete.md' },
            { text: 'Cascader 级联选择器', link: '/components/cascader.md' },
            { text: 'Checkbox 多选框', link: '/components/checkbox.md' },
            { text: 'DatePicker 日期选择器', link: '/components/date-picker.md' },
            { text: 'DateTimePicker 日期时间选择器', link: '/components/datetime-picker.md'},
            { text: 'Form 表单', link: '/components/form.md'},
            { text: 'Input 输入框', link: '/components/input.md'},
            { text: 'Input Number 数字输入框', link: '/components/input-number.md'},
            { text: 'Radio 单选框', link: '/components/radio.md'},
            { text: 'Select 选择器', link: '/components/select.md'},
            { text: 'Virtualized Select 虚拟化选择器', link: '/components/select-v2.md'},
            { text: 'Slider 滑块', link: '/components/slider.md'},
            { text: 'Switch 开关', link: '/components/switch.md'},
            { text: 'TimePicker 时间选择器', link: '/components/time-picker.md'},
            { text: 'TimeSelect 时间选择', link: '/components/time-select.md'},
            { text: 'Transfer 穿梭框', link: '/components/transfer.md'},
            { text: 'TreeSelect 树形选择', link: '/components/tree-select.md'},
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
        {
          text: 'Data 数据展示',
          items: [
            { text: 'Avatar 头像', link: '/components/avatar.md' },
            { text: 'Descriptions 描述列表', link: '/components/descriptions.md'},
            { text: 'Pagination 分页', link: '/components/pagination.md'},
            { text: 'Tag 标签', link: '/components/tag.md'},
            { text: 'Tour 漫游式引导', link: '/components/tour.md'},
            { text: 'Segmented 分段控制器', link: '/components/segmented.md'},
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
        {
          text: 'Navigation 导航',
          items: [
            { text: 'Affix 固钉', link: '/components/affix.md' },
            { text: 'Backtop 回到顶部', link: '/components/backtop.md' },
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown.md' },
            { text: 'Menu 菜单', link: '/components/menu.md' },
            { text: 'Tabs 标签页', link: '/components/tabs.md' },
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
        {
          text: 'Feedback 反馈组件',
          items: [
            { text: 'Alert 提示', link: '/components/alert.md' },
            { text: 'Dialog 对话框', link: '/components/dialog.md' },
            { text: 'Loading 加载', link: '/components/loading.md' },
            { text: 'Message 消息提示', link: '/components/message.md' },
            { text: 'MessageBox 消息弹框', link: '/components/message-box.md' },
            { text: 'Notification 通知', link: '/components/notification.md' },
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

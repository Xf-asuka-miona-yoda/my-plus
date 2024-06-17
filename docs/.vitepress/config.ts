import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'JiangNanPlus基础组件文档',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/jiangnan-plus/',
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
            { text: 'Button组件', link: '/components/button.md' },
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

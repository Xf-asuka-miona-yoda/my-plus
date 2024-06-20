---
title: Menu 菜单
lang: zh-CN
---

# Menu 菜单

为网站提供导航功能的菜单。

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (e.g: [VitePress](https://vitepress.vuejs.org/)).

:::

## 顶栏

顶部栏菜单可以在各种场景中使用。

:::demo 导航菜单默认为垂直模式，通过将 mode 属性设置为 horizontal 来使导航菜单变更为水平模式。 另外，在菜单中通过 sub-menu 组件可以生成二级菜单。 Menu 还提供了`background-color`、`text-color`和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

menu/basic

:::


## 侧栏

垂直菜单，可内嵌子菜单。

:::demo 通过 el-menu-item-group 组件可以实现菜单进行分组，分组名可以通过 title 属性直接设定，也可以通过具名 slot 来设定。

menu/vertical

:::

## Collapse 折叠面板

垂直导航菜单可以被折叠

:::demo

menu/collapse

:::

## 弹出层偏移量 ^(2.4.4)

当提供了 popperOffset 配置，会覆盖 Submenu 的 `popper-offset`.

:::demo

menu/popper-offset

:::


---
title: Autocomplete 自动补全输入框
lang: zh-CN
---

# Autocomplete 自动补全输入框

根据输入内容提供对应的输入建议。

:::tip

在 SSR（如 [Nuxt](https://nuxt.com/v3)）或 SSG 场景（如 [VitePress](https://vitepress.vuejs.org/)）下，您需要将组件包裹在 `<client-only></client-only>` 之中。

:::

## 基础用法

Autocomplete 组件提供输入建议。

:::demo `fetch-suggestions` 属性是返回建议输入的方法。 在此示例中， `querySearch(queryString, cb)` 方法通过 `cb(data)` 给 Autocomplete 组件返回建议。

autocomplete/autocomplete

:::

## 自定义模板

自定义如何显示输入建议。

:::demo 使用 `scoped slot` 自定义输入建议。 在这个范围中，你可以使用 `item` 键来访问当前输入建议对象。

autocomplete/autocomplete-template

:::

## 远程搜索

从服务端搜索数据。

:::demo

autocomplete/remote-search

:::

## 自定义加载 ^(2.5.0)

修改加载区域内容

:::demo

autocomplete/custom-loading

:::


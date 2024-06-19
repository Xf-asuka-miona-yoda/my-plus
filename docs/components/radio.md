---
title: Radio 单选框
lang: zh-CN
---

# Radio 单选框

:::warning

`label` 作为 `value` 来使用已经被 **废弃**, 建议`label` 只用来表示展示的文字，这个被废弃的用法**将会在** ^(3.0.0) 版本被移除，请考虑使用新 API 替换.

新 API `value` 在^(2.6.0) 中已经可用，您可以使用 `value` API 来设置复选框的值。

:::

在一组备选项中进行单选

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio `value`属性的值， `value`可以是`String`、`Number` 或 `Boolean`。

radio/basic-usage

:::

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

:::demo 你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

radio/disabled

:::

## 单选框组

适用于在多个互斥的选项中选择的场景

:::demo 结合`el-radio-group`元素和子元素`el-radio`可以实现单选组， 为 `el-radio-group` 绑定 `v-model`，再为 每一个 `el-radio` 设置好 `label` 属性即可， 另外，还可以通过 `change` 事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

radio/radio-button-group

:::

## 按钮样式

你可以让单选框看起来像一个按钮一样。

:::demo 只需要把 `el-radio` 元素换成 `el-radio-button` 元素即可， 此外，Element Plus 还提供了 `size` 属性用来控制单选框的大小。

radio/button-style

:::

## 带有边框

:::demo 设置 `border` 属性为 true 可以渲染为带有边框的单选框。

radio/with-borders

:::

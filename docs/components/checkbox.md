---
title: Checkbox 多选框
lang: zh-CN
---

# Checkbox 多选框

:::warning

`label` 作为 `value` 来使用已经被 **废弃**, 建议`label` 只用来表示展示的文字，这个被废弃的用法**将会在** ^(3.0.0) 版本被移除，请考虑使用新 API 替换.

新 API `value` 在^(2.6.0) 中已经可用，您可以使用 `value` API 来设置复选框的值。

:::

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

:::demo `checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 `v-model` 绑定 `Array` 类型的变量即可。 只有一个选项时的默认值类型为 `Boolean`，当选中时值为`true`。 `el-checkbox` 标签中的内容将成为复选框按钮之后的描述。

checkbox/basic

:::

## 禁用状态

多选框不可用状态。

:::demo 设置 `disabled` 属性即可。

checkbox/disabled

:::

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

:::demo 在 `el-checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。 在 `el-checkbox` 组件中，`value` 是选择框的值。 如果该组件下没有被传入内容，那么 `label` 将会作为 checkbox 按钮后的介绍。 `value` 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

checkbox/grouping

:::

## 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

:::demo

checkbox/intermediate

:::

## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

:::demo

checkbox/limitation

:::

## 按钮样式

按钮样式的多选组合。

:::demo 只需要把 `el-checkbox` 元素替换为 `el-checkbox-button` 元素即可。 此外，Element Plus 还提供了`size`属性。

checkbox/button-style

:::

## 带有边框

:::demo 设置`border`属性可以渲染为带有边框的多选框。

checkbox/with-border

:::

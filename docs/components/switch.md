---
title: Switch 开关
lang: zh-CN
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

:::demo 绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--el-switch-on-color` 属性与 `--el-switch-off-color` 属性来设置开关的背景色。

switch/basic

:::

## 尺寸

:::demo

switch/sizes

:::

## 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。

:::demo 使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

switch/text-description

:::

## 显示自定义图标

:::tip

使用 `inactive-icon` 和 `active-icon` 属性来添加图标。 您可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。 

:::

:::demo 使用 `inactive-icon` 和 `active-icon` 属性来添加图标。 使用 `inline-prompt` 属性来控制图标显示在点内。

switch/custom-icons

:::

## 扩展的 value 类型

:::demo 你可以设置 `active-value` 和 `inactive-value` 属性， 它们接受 `Boolean`、`String` 或 `Number` 类型的值。

switch/extended-value-types

:::

## 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

switch/disabled

:::

## 加载状态

:::demo 设置`loading`属性，接受一个`Boolean`，设置`true`即加载中状态。

switch/loading

:::

## 阻止切换

:::demo 设置`beforeChange`属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。

switch/prevent-switching

:::

## 自定义动作图标 ^(2.3.9)

:::demo 使用 `inactive-action-icon` 和 `active-action-icon` 属性来添加图标。

switch/custom-action-icon

:::

## 自定义操作图标 ^(2.4.4)

:::demo 使用 `active-action` 和 `inactive-action` 属性来添加图标。

switch/custom-action-slot

:::


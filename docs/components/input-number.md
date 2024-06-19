---
title: Input Number 数字输入框
lang: zh-CN
---

# Input Number 数字输入框

仅允许输入标准的数字值，可定义范围

## 基础用法

:::demo 要使用它，只需要在 `<el-input-number>` 元素中使用 `v-model` 绑定变量即可，变量的初始值即为默认值。

input-number/basic

:::

:::tip

当输入无效的字符串到输入框时，由于错误，输入值将把 `NaN` 导入到上层

:::

## 禁用状态

:::demo `disabled`属性接受一个 `Boolean`，设置为`true`即可禁用整个组件。 ，如果你只需要控制数值在某一范围内，可以设置 `min` 属性和 `max` 属性， 默认最小值为 `0`。

input-number/disabled

:::

## 步进

允许定义递增递减的步进控制

:::demo 设置 `step` 属性可以控制步长。

input-number/steps

:::

## 严格步进

:::demo `step-strictly`属性接受一个`Boolean`。 如果这个属性被设置为 `true`，则只能输入步进的倍数。

input-number/step-strictly

:::

## 精度

:::demo 设置 `precision` 属性可以控制数值精度，接收一个 `Number`。

input-number/precision

:::

:::tip

`precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。

:::

## 不同的输入框尺寸

使用 `size` 属性额外配置尺寸，可选的尺寸大小为：`large` 或 `small`

:::demo

input-number/size

:::

## 按钮位置

:::demo 设置 `controls-position` 属性可以控制按钮位置。

input-number/controlled

:::

## 自定义图标 ^(2.6.3)

:::demo 使用 `decrease-icon` 和 `increase-icon` 设置自定义图标。

input-number/custom

:::


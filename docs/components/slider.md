---
title: Slider 滑块
lang: zh-CN
---

# Slider 滑块

通过拖动滑块在一个固定区间内进行选择

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (e.g: [VitePress](https://vitepress.vuejs.org/)).

:::

## 基础用法

在拖动滑块时，显示当前值

:::demo 通过设置绑定值自定义滑块的初始值

slider/basic-usage

:::

## 离散值

选项可以是离散的

:::demo 改变`step`的值可以改变步长， 通过设置 `show-stops` 属性可以显示间断点

slider/discrete-values

:::

## 带有输入框的滑块

通过输入框输入来改变当前的值。

:::demo 设置 `show-input` 属性会在右侧显示一个输入框

slider/slider-with-input-box

:::

## 不同尺寸

:::demo

slider/sizes

:::

## 位置

您可以自定义 Tooltip 提示的位置。

:::demo

slider/placement

:::

## 范围选择

你还可以选择一个范围值

:::demo 配置 `range` 属性以激活范围选择模式，该属性的绑定值是一个数组，由最小边界值和最大边界值组成。

slider/range-selection

:::

## 垂直模式

:::demo 配置 `vertical` 属性为 `true` 启用垂直模式。 在垂直模式下，必须设置 `height` 属性。

slider/vertical-mode

:::

## 显示标记

:::demo 设置 `marks` 属性可以在滑块上显示标记。

slider/show-marks

:::

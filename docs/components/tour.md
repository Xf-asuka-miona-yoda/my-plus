---
title: Tour 漫游式引导
lang: zh-CN
---

# Tour 漫游式引导

用于分步引导用户了解产品功能的气泡组件。 用来引导用户并介绍产品

## 基础用法

最简单的用法。

:::demo

tour/basic

:::

## 非模态

使用`:mask="false"`可以将引导变为非模态， 同时为了强调引导本身，建议与 type="primary" 组合使用。

:::demo

tour/non-modal

:::

## 位置

改变引导相对于目标的位置，共有 12 种位置可供选择。 当 `target` 为空时引导将会展示在正中央。

:::demo

tour/placement

:::

## 自定义遮罩样式

自定义遮罩样式。

:::demo

tour/mask

:::

## 自定义指示器

自定义指示器。

:::demo

tour/indicator

:::

## 目标

可以传入目标的各种类型的参数。 自^(2.5.2)以来支持字符串和函数类型。

:::demo

tour/target

:::

---
title: Calendar 日历
lang: zh-CN
---

# Calendar 日历

显示日期

## 基础用法

:::demo 设置 `value` 来指定当前显示的月份。 如果 `value` 未指定，则显示当月。 `value` 支持 `v-model` 双向绑定。

calendar/basic

:::

## 自定义内容

:::demo 通过设置名为 `date-cell` 的 `scoped-slot` 来自定义日历单元格中显示的内容。 在 `scoped-slot` 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。 详情解释参考下方的 API 文档。

calendar/customize

:::

## 范围

:::demo 设置 `range` 属性指定日历的显示范围。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。

calendar/range

:::

## 自定义日历头部

:::demo

calendar/header

:::

## 国际化

由于 Element Plus 的默认语言为英语，如果你需要设置其它的语言，请参考element-plus[国际化]文档。

要注意的是：日期相关的文字（月份，每一周的第一天等等）也都是通过国际化来配置的。


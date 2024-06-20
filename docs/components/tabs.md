---
title: Tabs 标签页
lang: zh-CN
---

# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

tabs/basic

:::

## 卡片风格的标签

你可以设置具有卡片风格的标签。

:::demo 只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。

tabs/card-style

:::

## 带有边框的卡片风格

你还可以设置标签页为带有边框的卡片

:::demo 将 `type` 设置为 `border-card`。

tabs/border-card

:::

## 标签位置的设置

可以通过 `tab-position` 设置标签的位置

:::demo 标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`

tabs/tab-position

:::

## 自定义标签页的内容

可以通过具名插槽来实现自定义标签页的内容

:::demo

tabs/custom-tab

:::

## 动态增减标签页

增减标签页按钮只能在选项卡样式的标签页下使用

:::demo

tabs/dynamic-tabs

:::

## 添加按钮自定义图标 ^(2.4.0)

:::demo

tabs/customized-add-button-icon

:::

## 增加标签页触发器自定义

:::demo

tabs/customized-trigger

:::


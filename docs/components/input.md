---
title: Input 输入框
lang: zh-CN
---

# Input 输入框

通过鼠标或键盘输入字符

:::warning

Input 为受控组件，它 **总会显示 Vue 绑定值**。

在正常情况下，`input` 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 `v-model`)。 否则，输入框的值将不会改变。

不支持 `v-model` 修饰符。

:::

## 基础用法

:::demo

input/basic

:::

## 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件

input/disabled

:::

## 一键清空

:::demo 使用`clearable`属性即可得到一个可一键清空的输入框

input/clearable

:::

## 格式化

在 `formatter`的情况下显示值，我们通常同时使用 `parser`

:::demo

input/formatter

:::

## 密码框

:::demo 使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

input/password

:::

## 带图标的输入框

带有图标标记输入类型

:::demo 要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。

input/with-icon

:::

## 文本域

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。

:::demo 文本域高度可通过 `rows` 属性控制

input/textarea

:::

## 自适应文本域

设置文字输入类型的 `autosize` 属性使得根据内容自动调整的高度。 你可以给 `autosize` 提供一个包含有最大和最小高度的对象，让输入框自动调整。

:::demo

input/auto-sizing-textarea

:::

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

:::demo 可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容。

input/mixed-input

:::

## 尺寸

:::demo 使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。

input/various-size

:::

## 输入长度限制

:::demo 使用 `maxlength` 和 `minlength` 属性, 来控制输入内容的最大字数和最小字数。 "字符数"使用JavaScript字符串长度来衡量。 为文本或文本输入类型设置 `maxlength` prop可以限制输入值的长度。 允许你通过设置 `show-word-limit` 到 `true` 来显示剩余字数。

input/length-limiting

:::


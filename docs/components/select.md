---
title: Select 选择器
lang: zh-CN
---

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

:::tip

在版本 `2.5.0`之后， `el-select` 的默认宽度更改为 `100%` 当使用内联形式时，宽度将显示异常。 为了保持显示正常, 您需要手动配置 `el-select` 的宽度 (如: [Example](https://github.com/element-plus/element-plus/issues/15834#issuecomment-1936919229)).

:::

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (e.g: [VitePress](https://vitepress.vuejs.org/)).

:::

## 基础用法

:::demo 适用广泛的基础单选 `v-model` 的值为当前被选中的 `el-option` 的 value 属性值

select/basic-usage

:::

## 有禁用选项

:::demo 在 `el-option` 中，设定 `disabled` 值为 true，即可禁用该选项

select/disabled-option

:::

## 禁用状态

禁用整个选择器组件

:::demo 为 `el-select` 设置 `disabled`属性，则整个选择器不可用。

select/disabled

:::

## 可清空单选

您可以使用清除图标来清除选择。

:::demo 为 `el-select` 设置 `clearable` 属性，则可将选择器清空。 需要注意的是，`clearable` 属性仅适用于单选。

select/clearable

:::

## 基础多选

多选选择器使用 tag 组件来展示已选中的选项。

:::demo 为 `el-select` 设置 `multiple` 属性即可启用多选， 此时 `v-model` 的值为当前选中值所组成的数组。 默认情况下选中值会以 Tag 组件的形式展现， 你也可以设置 `collapse-tags` 属性将它们合并为一段文字。 您可以使用 `collapse-tags-tooltip` 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。

select/multiple

:::

## 自定义模板

你可以自定义如何来渲染每一个选项。

:::demo 将自定义的 HTML 模板插入 `el-option` 的 slot 中即可。

select/custom-template

:::

## 自定义下拉菜单的头部 ^(2.4.3)

您可以自定义下拉菜单的头部。

::: demo 使用slot 自定义内容

select/custom-header

:::

## 自定义下拉菜单的底部 ^(2.4.3)

您可以自定义下拉菜单的底部。

::: demo 使用slot 自定义内容

select/custom-footer

:::

## 将选项进行分组

你可以为选项进行分组来区分不同的选项

:::demo 使用 `el-option-group` 对备选项进行分组，它的 `label` 属性为分组名

select/grouping

:::

## 筛选选项

可以利用筛选功能快速查找选项。

:::demo 为`el-select`添加`filterable`属性即可启用搜索功能。 默认情况下，Select 会找出所有 `label` 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。 `filter-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。

select/filterable

:::

## 远程搜索

输入关键字以从远程服务器中查找数据。

:::demo 从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。 需要注意的是，如果 `el-option` 是通过 `v-for` 指令渲染出来的，此时需要为 `el-option` 添加 `key` 属性， 且其值需具有唯一性，比如这个例子中的 `item.value`。

select/remote-search

:::

## 创建新的选项

创建并选中未包含在初始选项中的条目。

:::demo 通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 `allow-create` 正常工作， `filterable` 的值必须为 `true`。 本例还使用了 `default-first-option` 属性， 在该属性为 `true` 的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。

select/allow-create

:::

## 使用值键 value-key 属性

如果 Select 的绑定值为对象类型，请务必指定 `value-key` 作为它的唯一性标识。

:::demo 通过使用 `value-key` 属性，可以正确处理带有重复label的数据。 这样虽然`label` 是重复的，但任可通过 `id` 来确认唯一性。

select/value-key

:::

## 自定义标签 ^(2.5.0)

您可以自定义标签。

:::demo 将自定义的标签插入 `el-select` 的 slot 中即可。 `collapse-tags`, `collapse-tags-tooltip`, `max-collapse-tags` 在此模式下不生效.

select/custom-tag

:::

## 自定义加载 ^(2.5.2)

修改加载区域内容

:::demo

select/custom-loading

:::

## 空值配置^(2.7.0)

若想配置如空字符串为有效值而不是空值，可以配置 `empty-values` 为 `[null, undefined]`.

如果您想要将清空值更改为 `null`, 请设置 `value-on-clear` 为 `null`

:::demo

select/empty-values

:::

## 自定义标签 ^(2.7.4)

您可以自定义标签

:::demo

select/custom-label

:::

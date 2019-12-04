---config
order: 0 
type: 通用
name: Button
sub: 按钮
---

# Button 按钮
按钮用于开始一个即时操作。

## 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示
<!-- demo -->

## API
通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `fill` -> `size` -> `loading` -> `disabled` 。

按钮的属性说明如下：

|属性|说明|类型|默认值|版本|
|---|---|---|---|---|
|disabled|按钮失效状态|**boolean**|`false`||
|fill|设置按钮填充状态|**boolean**|`false`||
|loading|设置按钮载入状态|**boolean**|`false`||
|size|设置按钮大小，可选值为`default` `large` `small`或者不设|**string**|`default`||
|todo...|

---
order: 0
title: 按钮类型
---

按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

```jsx harmony
import { Button } from "unknown";
import "unknown/Button/style/index.scss";

export default function demo() {
  return (
    <div>
      <Button className="btn">Click me</Button>
      <Button className="btn" fill>
        Click me
      </Button>
    </div>
  );
}
```

```scss
.btn {
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
}
```

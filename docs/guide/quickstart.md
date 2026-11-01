---
title: 快速开始
---

# 快速开始

## 1. 选分支

只选与你的 MediaWiki 版本对应的分支，不要混用：

| MediaWiki | 分支 |
|---|---|
| 1.43 LTS | `REL1_43` |
| 1.45 | `REL1_45` |
| 1.46 | `REL1_46` |

## 2. 放入 skins

下载 ZIP，解压到 `skins/Chroma`，确认：

```text
skins/Chroma/skin.json
```

## 3. 启用

`LocalSettings.php`：

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

## 4. 打开 Preferences

登录后访问：

```text
Special:Preferences#mw-prefsection-rendering
```

可以设置：

- 配色方案：跟随系统 / 浅色 / 深色；
- 布局：应用式 / 阅读式；
- 阅读模式：默认开/关；
- 主题色：teal / blue / green / violet。

## 5. 试试顶栏菜单

顶栏右侧有两个入口：

- **显示选项**：布局、配色方案、阅读模式；
- **账户**：个人工具、登录/创建账号。

页面标题下方是页面标签（页面/讨论）和页面操作（阅读/编辑/历史）。

## 下一步

- [配置](configuration.md)
- [界面与导航](usage.md)
- [主题与配色](theming.md)
- [移动端](mobile.md)

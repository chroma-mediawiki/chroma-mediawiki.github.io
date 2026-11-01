---
title: 常见问题
---

# 常见问题

## 安装后为什么没变化？

先确认两件事：

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

已经写进 wiki 根目录的 `LocalSettings.php`，并且：

```text
skins/Chroma/skin.json
```

存在，不是 `skins/Chroma/Chroma/skin.json`。

然后刷新页面；还不行就看 PHP 错误日志，或访问 `Special:Version` 确认 Chroma 已注册。

## 需要会 PHP / Node.js 吗？

不需要。安装只需要会编辑 `LocalSettings.php` 的两行配置。Node.js 只在你要修改皮肤源码、重新生成 token 时才需要。

## 为什么没有 logo？

Chroma 只在配置了真实的 `$wgLogos` 时显示 logo。没有配置时只显示站点名，不会自动生成首字母占位图。配置方法见 [配置](configuration.md)。

## 为什么主题色只有四种？

当前版本使用四套预设色板：Teal、Blue、Green、Violet。任意 seed 生成完整色板还没有实现；填其他颜色会回退到 Teal。

## 手机端为什么还是 MinervaNeue？

确认：

```php
$wgDefaultMobileSkin = 'chroma';
```

并且 MobileFrontend 已加载。清一下浏览器 cookie 和缓存，再看 `Special:Version` 里 Chroma 是否已注册。

## 编辑按钮去哪了？

Chroma 没有右下角悬浮的编辑按钮。编辑、编辑源代码、查看历史都在页面标题下方的工具栏里；手机端收成一排图标。

## 页面很长，目录在哪？

桌面端在右侧，滚动时固定；手机端、阅读布局和阅读模式下会隐藏目录。顶栏「显示选项」可以切换布局。

## 支持 MediaWiki 1.44 吗？

不支持。维护的是 1.43 LTS、1.45、1.46；1.44 没有单独分支。

## 会破坏现有扩展吗？

Chroma 不修改扩展的 HTML 逻辑，只提供样式覆盖。大多数扩展会直接沿用基础排版；已测试的扩展见 [兼容性](compatibility.md)。如果某个扩展样式异常，请带扩展名和版本报告。

## 怎么备份/升级？

升级前备份 `skins/Chroma` 和 `LocalSettings.php`；用同一分支的新 ZIP 覆盖 `skins/Chroma`；清缓存后到 `Special:Version` 确认版本。

## 可以商用吗？

**可以。**

GPL-3.0-or-later 允许商业使用：公司内部 wiki、客户项目、托管服务、收费部署或定制都可以，不需要向 Chroma 付费或申请授权。

关键区别是「使用」和「分发」：

- **自己使用 / 在自己服务器上运行**，包括对外提供 SaaS，不因为 GPL 就必须公开你的修改；
- **把 Chroma 或修改版分发给客户/公众**，必须按 GPL 提供对应源代码、保留版权和许可证声明，并以 GPL 授权衍生作品；
- 不能移除 `LICENSE` / `NOTICE`，也不能宣称 Google 或 Chroma 官方背书；
- 软件按现状提供，不附带担保。

如果要把修改版**闭源分发**进商业产品，GPL 不允许直接这么做，需要单独的法律评估或授权。第三方组件另有许可，见 `NOTICE`。

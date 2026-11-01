---
title: 常见问题
---

# 常见问题

## 装完没变化？

确认：

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

并且 `skins/Chroma/skin.json` 存在。清除缓存后再试。

## 为什么没有 logo？

Chroma 只在配置了真实自定义 `$wgLogos` 时显示 logo。MediaWiki 默认的 `change-your-logo` 资源会被视为“没有 logo”，此时只显示站点名，不生成首字母占位图标。

## 为什么主题色只有四种？

当前版本使用构建时生成的预设色板（teal / blue / green / violet）。任意 seed 生成完整色板尚未实现；填其他颜色会回退到 teal。

## 手机端还是 MinervaNeue？

设置：

```php
$wgDefaultMobileSkin = 'chroma';
```

并确认 MobileFrontend 已加载、浏览器没有缓存旧 cookie。

## 编辑按钮去哪了？

Chroma 没有浮动编辑 FAB。编辑、编辑源代码、查看历史都在页面标题下方的操作区；移动端收成图标按钮。

## 页面很长，目录呢？

桌面端 TOC 在右侧 sticky；窄屏、阅读布局和阅读模式下会隐藏。阅读布局可从顶栏「显示选项」切换。

## 支持 1.44 吗？

不支持。维护线是 1.43 LTS、1.45、1.46；1.44 不是 LTS，未单独维护。

## 可以商用吗？

皮肤使用 GPL-3.0-or-later。第三方组件许可见仓库的 `NOTICE`。Chroma 与 Google 无关联，Material Design / Material 3 是 Google LLC 的商标。

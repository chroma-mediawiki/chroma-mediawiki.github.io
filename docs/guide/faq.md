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

**可以。**

GPL-3.0-or-later 允许商业使用：公司内部 wiki、客户项目、托管服务、收费部署或定制都可以，不需要向 Chroma 付费或申请授权。

关键是区分“使用”和“分发”：

- **自己使用 / 在自己服务器上运行**：包括对外提供 SaaS，不因为 GPL 就必须公开你的修改；
- **把 Chroma 或修改版分发给客户或公众**：必须按 GPL 提供对应源代码、保留版权与许可证声明，并以 GPL 授权衍生作品；
- 不能移除 `LICENSE` / `NOTICE`，也不能宣称 Google 或 Chroma 官方背书；
- 软件按现状提供，不附带担保。

如果你要把修改版**闭源分发**进商业产品，GPL 不允许直接这么做，需要单独的法律评估或授权。第三方组件另有许可，见 `NOTICE`。

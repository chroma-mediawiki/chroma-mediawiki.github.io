---
title: 概览
---

# Chroma 是什么

Chroma 是一套面向 MediaWiki 的皮肤，使用 Material Design 3 风格的 **design token**（色彩角色、字阶、形状、海拔、动效与状态层），并在 MediaWiki 的服务器渲染结构上实现应用式布局、阅读布局和移动端接管。

它不是完整的 Material 3 组件库，也不重造 MediaWiki 的内容模型。页面、讨论、历史、编辑器、扩展仍由 MediaWiki 驱动；皮肤负责呈现、层级和阅读节奏。

## 它解决什么问题

- MediaWiki 默认皮肤偏工具化，阅读体验和视觉层级有限；
- 配色、字号、圆角、暗色模式分散在各处，难以统一；
- 手机端通常交给 MinervaNeue，桌面与移动的视觉语言断裂。

Chroma 用一套 token 把颜色、字阶、形状和状态收拢起来，然后用两种布局和移动端接管，把这些 token 落到 wiki 的阅读与编辑界面里。

## 你会得到

| 能力 | 说明 |
|---|---|
| MD3 token | 默认 seed `#006A6A`，四套预设，浅色/深色/跟随系统 |
| 两种布局 | 应用式（顶栏 + 抽屉）与阅读式 |
| 阅读模式 | 隐藏抽屉、目录和页面操作，正文居中 |
| 移动端 | MobileFrontend 全接管，手机 UA 直接使用 Chroma |
| 扩展兼容 | 1.46 配置 31 个 Tier 1 扩展；1.43/1.45 各 30 个矩阵 |
| 搜索 | 核心 `mediawiki.searchSuggest` 联想 |
| 特殊页 | 登录、历史、差异、偏好设置统一 surface |

## 快速开始

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';

// 可选：MobileFrontend 全接管
$wgDefaultMobileSkin = 'chroma';
```

从 [安装](installation.md) 开始，或看 [配置](configuration.md) 和 [主题](theming.md)。

## 版本

当前文档对应 **v0.5.2**。三条维护线：

- MediaWiki 1.43 LTS → `REL1_43`
- MediaWiki 1.45 → `REL1_45`
- MediaWiki 1.46 → `REL1_46`

三条分支分别锁定 `skin.json` 的 `requires.MediaWiki`，不要跨分支合并。

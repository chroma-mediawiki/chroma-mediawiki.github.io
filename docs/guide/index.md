---
title: 开始使用
---

# 第一次用 Chroma

Chroma 是一套 MediaWiki 皮肤。装好之后，你的 wiki 会变成：

- **应用式界面**：顶部栏、搜索、导航抽屉、右侧目录；
- **更适合长文的阅读布局**：正文居中，工具后退；
- **自带浅色/深色主题**，还能选八种主题色；
- **手机端直接使用 Chroma**，不再套 MinervaNeue。

你不需要会写 PHP，也不需要 Node.js。安装只需要三步：

1. 下载和你的 MediaWiki 版本对应的安装包；
2. 把文件放进 `skins/Chroma`；
3. 在 `LocalSettings.php` 里加两行配置。

## 先确认你的 MediaWiki 版本

登录 wiki，打开 `Special:Version`，看第一行 **MediaWiki** 的版本号。

| 你的 MediaWiki | 下载 |
|---|---|
| 1.43.x | [v0.6.0-REL1_43](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.6.0-REL1_43) |
| 1.45.x | [v0.6.0-REL1_45](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.6.0-REL1_45) |
| 1.46.x | [v0.6.0-REL1_46](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.6.0-REL1_46) |

不要混用版本：1.46 的分支装到 1.43 上会报错。

## 接下来读什么

| 你想… | 看这里 |
|---|---|
| 安装 | [安装步骤](installation.md) |
| 改主题色、深浅色 | [主题与配色](theming.md) |
| 改默认布局、阅读模式 | [配置](configuration.md) |
| 了解顶栏、目录、搜索怎么用 | [界面与导航](usage.md) |
| 手机访问 | [移动端](mobile.md) |
| 装不上/没变化 | [常见问题](faq.md) |

## 关于「版本」

当前文档对应 **v0.6.0**。Chroma 同时维护三条线：

- MediaWiki **1.43 LTS** → 分支 `REL1_43`
- MediaWiki **1.45** → 分支 `REL1_45`
- MediaWiki **1.46** → 分支 `REL1_46`

每条线的 `skin.json` 都写死了兼容的 MediaWiki 范围，所以下载对应版本即可。

## 它和“完整 Material 3”是什么关系？

Chroma 使用了 Material 3 风格的 **设计 token**（颜色角色、字阶、圆角、阴影、动效），并实现了其中一部分 Expressive 风格；它不是 Google 官方的 MediaWiki 皮肤，也不是完整的 Material 3 组件库。

皮肤只改变“看起来怎么样、读起来怎么样”，不会改变 MediaWiki 的页面、编辑、历史和扩展机制。

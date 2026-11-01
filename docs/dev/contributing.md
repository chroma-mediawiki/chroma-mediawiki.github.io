---
title: 参与贡献
---

# 参与贡献

## 提交

- 一个 PR 只做一件事；
- 说明影响的 MediaWiki 版本（1.43 / 1.45 / 1.46）；
- 样式改动附截图（浅色 + 深色，必要时移动端）；
- PHP 改动跑 `php -l`；
- 不提交生成的 token drift、`node_modules` 或构建产物。

## 代码风格

- CSS 使用 tab 缩进，颜色/圆角/间距优先 token；
- PHP 4 空格、MediaWiki 风格；
- JS 使用现有 IIFE + 渐进增强，不引入构建依赖；
- 模板保持 body-only。

## 许可

提交即表示同意以 GPL-3.0-or-later 发布；第三方素材需在 NOTICE 中登记。

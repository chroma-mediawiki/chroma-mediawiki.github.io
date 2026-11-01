---
title: 仓库结构
---

# 仓库结构

```text
skin.json                皮肤注册、ResourceLoader、Hooks
includes/
  SkinChroma.php         extends SkinMustache，注入 sitename/logo/search/edit 数据
  Hooks.php              Preferences 字段、body data-* 属性
templates/skin.mustache  body-only Mustache 模板
resources/
  styles/tokens.css      生成的 MD3 token（浅色/深色/auto）
  styles/tokens-presets.css
  styles/base.css        布局与组件
  styles/extensions.css  扩展/特殊页覆盖
  styles/codex-bridge.css
  scripts/chroma.js      抽屉、主题、布局、阅读模式、scroll-spy、snackbar
i18n/                    en / qqq / zh-hans / zh-hant
tools/                   token / preset 生成器
```

## 渲染链路

1. MediaWiki 调用 `SkinChroma::getTemplateData()`；
2. `SkinChroma` 在父类数据上补充 `sitename`、`link-search`、`has-logo`、`is-editable`、`link-edit`；
3. `templates/skin.mustache` 只输出 body 内容，`<head>` 由 MediaWiki 核心负责；
4. `Hooks::onOutputPageBodyAttributes()` 把用户偏好写成 `data-chroma-*`；
5. `resources/scripts/chroma.js` 只做渐进增强。

## 不要做的事

- 不要在模板里输出 `<html>`、`<head>`、`<body>`；
- 不要把带 `dependencies` 的模块放进 skin `styles` 选项（会被 ClientHtml 丢弃）；
- 不要硬编码颜色，优先 `--md-sys-*`；
- 不要跨分支合并 `skin.json` 的 `requires` / `menus` 配置。

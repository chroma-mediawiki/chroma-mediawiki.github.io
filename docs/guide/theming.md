---
title: 主题与配色
---

# 主题与配色

## Token

Chroma 使用 `--md-sys-*` 变量组织颜色、字阶、形状、海拔和动效：

```css
--md-sys-color-primary
--md-sys-color-on-primary
--md-sys-color-surface
--md-sys-color-surface-container
--md-sys-typescale-body-large-size
--md-sys-shape-corner-large
--md-sys-elevation-2
--md-sys-motion-easing-emphasized
```

组件优先消费 token；站点 CSS 可以覆盖变量，但不建议直接改组件颜色。

## 四套预设

| Preset | Seed |
|---|---|
| teal | `#006A6A` |
| blue | `#0061A4` |
| green | `#386A20` |
| violet | `#6750A4` |

用户可在 `Special:Preferences#mw-prefsection-rendering` 选择，站点管理员用 `$wgChromaDefaultSeed` 设默认。

## 深色模式

- `data-chroma-theme="light"` / `"dark"` / `"system"`；
- CSS 通过 token 切换，不是简单反色；
- 遵循 `prefers-color-scheme`。

## 自定义颜色

推荐只覆盖语义角色，例如：

```css
:root {
  --md-sys-color-primary: #005a5a;
  --md-sys-color-on-primary: #ffffff;
}
```

要生成完整色板，使用仓库的 token 工具：

```bash
npm install
npm run tokens
```

详见 [设计 token](../dev/tokens.md)。

## 字体

默认使用系统 CJK 字体 + Roboto Flex 拉丁字母回退，不请求外部字体 CDN。需要换字体时，覆盖 `--md-sys-typescale-font-family`。

## 不要做什么

- 不要直接改 `resources/styles/tokens.css`（生成文件）；
- 不要把任意 seed 直接填进 `$wgChromaDefaultSeed` 期待完整色板（目前只支持四套预设）；
- 不要用 `!important` 大面积覆盖布局；优先用 token 和组件类。

---
title: 设计 token
---

# 设计 token

## 生成

```bash
npm install
npm run tokens
npm run presets
```

- `tools/generate-tokens.mjs` 使用 `@material/material-color-utilities` 从 seed 生成色彩角色、字阶、形状、海拔、动效、状态层；
- 输出 `resources/styles/tokens.css` 和仓库根目录的 `tokens.json`；
- `tools/generate-presets.mjs` 生成八套预设到 `resources/styles/tokens-presets.css`。

CI 的 `tokens` job 会重新生成并检查 drift：

```bash
npm run tokens
npm run presets
git diff --exit-code -- resources/styles/tokens.css resources/styles/tokens-presets.css tokens.json
```

## 变量命名

```css
--md-sys-color-*
--md-sys-typescale-*-size / line / weight
--md-sys-shape-corner-*
--md-sys-elevation-*
--md-sys-motion-duration-* / easing-*
--md-sys-state-*-opacity
```

## 增加预设

1. 在 `tools/generate-presets.mjs` 的预设表中加入名称和 seed；
2. 运行 `npm run presets`；
3. 在 `Hooks.php` 的 `SEEDS` 和语言文件里补对应值；
4. 更新官网的[主题与配色](/guide/theming)页面和本页；
5. 检查深色/浅色对比度。

不要手工编辑生成的 CSS；CI 会发现 drift。

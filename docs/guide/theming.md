---
title: 主题与配色
---

# 主题与配色

## 普通用户：怎么换颜色

登录后打开：

```text
Special:Preferences#mw-prefsection-rendering
```

在「外观」里可以选：

- 主题色：Teal / Blue / Green / Violet / Rose / Amber / Indigo / Lime；
- 明暗：跟随系统 / 浅色 / 深色；
- 布局和阅读模式。

也可以直接点顶栏右侧的「显示选项」，不用进 Preferences。

## 管理员：改站点默认色

在 `LocalSettings.php`：

```php
$wgChromaDefaultSeed = '#0061A4'; // blue
```

八种预设：

| 预设 | 值 | 适合 |
|---|---|---|
| Teal | `#006A6A` | 默认，偏中性 |
| Blue | `#0061A4` | 偏正式、企业 |
| Green | `#386A20` | 偏自然、社区 |
| Violet | `#6750A4` | 偏创意 |
| Rose | `#984061` | 柔和、偏暖 |
| Amber | `#7D5700` | 温暖、醒目 |
| Indigo | `#4355B9` | 冷静、技术 |
| Lime | `#4C6700` | 清爽、活力 |

目前不支持任意颜色；填其他值会回退到 Teal。完整配置项见 [配置](configuration.md)。

## 深色模式

Chroma 的深色模式不是给页面加一层黑色滤镜，而是把同一套语义颜色角色重新映射到深色背景。

管理员可以设默认：

```php
$wgChromaDefaultScheme = 'dark'; // system | light | dark
```

访客仍然可以在顶栏切换。深色模式的对比度按 WCAG AA 调整。

## 预设效果

| Teal | Blue | Green | Violet |
|---|---|---|---|
| <img src="/screenshots/preset-teal.png" width="240" alt="Teal"> | <img src="/screenshots/preset-blue.png" width="240" alt="Blue"> | <img src="/screenshots/preset-green.png" width="240" alt="Green"> | <img src="/screenshots/preset-violet.png" width="240" alt="Violet"> |
| **Rose** | **Amber** | **Indigo** | **Lime** |
| <img src="/screenshots/preset-rose.png" width="240" alt="Rose"> | <img src="/screenshots/preset-amber.png" width="240" alt="Amber"> | <img src="/screenshots/preset-indigo.png" width="240" alt="Indigo"> | <img src="/screenshots/preset-lime.png" width="240" alt="Lime"> |

## 高级：颜色 token

Chroma 的组件不直接写死颜色，而是使用 `--md-sys-*` 变量：

```css
--md-sys-color-primary
--md-sys-color-on-primary
--md-sys-color-surface
--md-sys-color-surface-container
--md-sys-color-outline
```

如果要微调某个角色，在 `MediaWiki:Chroma.css` 覆盖：

```css
:root {
  --md-sys-color-primary: #005a5a;
  --md-sys-color-on-primary: #ffffff;
}
```

注意成对修改：`primary` 和 `on-primary` 要有足够对比度。

## 高级：重新生成整套色板

需要从 seed 生成完整 token 时，在皮肤仓库运行：

```bash
npm install
npm run tokens
```

会更新 `resources/styles/tokens.css` 和根目录 `tokens.json`。详见 [设计 token](../dev/tokens.md)。

## 字体

默认使用系统字体 + Roboto Flex 回退，不请求外部字体 CDN。需要换字体时，覆盖：

```css
:root {
  --md-sys-typescale-font-family: "Your Font", sans-serif;
}
```

## 不要做的事

- 不要直接编辑 `resources/styles/tokens.css`，更新皮肤时会被覆盖；
- 不要把任意 seed 填进 `$wgChromaDefaultSeed` 期待生成新色板；
- 不要用大量 `!important` 覆盖布局，优先改 token 或站点 CSS。

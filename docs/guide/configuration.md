---
title: 配置
---

# 配置

所有配置都写在 `LocalSettings.php`。Chroma 不会写数据库，也不依赖额外扩展。

## 默认值

```php
// 默认 seed，生成主题色板
$wgChromaDefaultSeed = '#006A6A';

// 'system' | 'light' | 'dark'
$wgChromaDefaultScheme = 'system';

// 'app' | 'reading'
$wgChromaDefaultLayout = 'app';

// 默认开启阅读模式（仅内容页生效）
$wgChromaDefaultReadingMode = false;

// 允许用户在 Preferences 覆盖
$wgChromaAllowUserColor = true;
$wgChromaAllowUserLayout = true;
$wgChromaAllowUserReadingMode = true;
```

## `$wgChromaDefaultSeed`

支持四套预设：

| 值 | 名称 |
|---|---|
| `#006A6A` | teal（默认） |
| `#0061A4` | blue |
| `#386A20` | green |
| `#6750A4` | violet |

目前**不支持任意 seed**：如果填了不在预设里的颜色，会回退到 teal。预设色板在构建时生成到 `resources/styles/tokens-presets.css`。

## `$wgChromaDefaultScheme`

- `system`：跟随 `prefers-color-scheme`；
- `light`：浅色；
- `dark`：深色。

选择结果会写成 `data-chroma-theme`，CSS 用 token 切换对应色板。

## `$wgChromaDefaultLayout`

- `app`：应用式，顶栏 + 抽屉 + 正文/TOC；
- `reading`：阅读式，隐藏抽屉和 TOC，正文居中。

用户可以在顶栏「显示选项」或 Preferences 中切换。

## `$wgChromaDefaultReadingMode`

为 `true` 时，内容页默认进入阅读模式：隐藏 TOC、页面操作，正文限宽居中。Special 页不受影响。

## 用户覆盖

三个 `$wgChromaAllowUser*` 控制 Preferences 里是否允许用户覆盖。设为 `false` 时，用户保存的值不会生效，站点使用管理员默认值。

::: tip 推荐
公开 wiki 建议允许用户覆盖主题与布局；内部 wiki 可以用管理员默认值锁定视觉。
:::

## 完整示例

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';

$wgChromaDefaultSeed = '#006A6A';
$wgChromaDefaultScheme = 'system';
$wgChromaDefaultLayout = 'app';
$wgChromaDefaultReadingMode = false;
$wgChromaAllowUserColor = true;
$wgChromaAllowUserLayout = true;
$wgChromaAllowUserReadingMode = true;

// MobileFrontend 全接管
// $wgDefaultMobileSkin = 'chroma';
```

## Logo

Chroma 只在配置了真实自定义 `$wgLogos` 时显示 logo：

```php
$wgLogos = [
    '1x' => "$wgResourceBasePath/resources/assets/logo.png",
    'icon' => "$wgResourceBasePath/resources/assets/icon.png",
];
```

没有自定义 `$wgLogos` 时只显示站点名，不会生成首字母占位图标。`$wgFavicon` 仍然由 MediaWiki 核心处理。

## 站点级 CSS

需要额外覆盖时，使用 `MediaWiki:Chroma.css` 或站点 CSS：

```css
:root {
  --md-sys-color-primary: #005a5a;
}
```

不要直接改 `resources/styles/` 里的生成文件；它们会在 token 重新生成时被覆盖。

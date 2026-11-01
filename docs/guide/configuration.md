---
title: 配置
---

# 配置

Chroma 的所有配置都写在 wiki 根目录的 `LocalSettings.php` 里。改完保存、刷新页面即可，不需要改数据库，也不需要重启服务器。

## 先看：你最可能想改什么

| 我想… | 改这个 | 填什么 |
|---|---|---|
| 换默认主题色 | `$wgChromaDefaultSeed` | 见下面的八套预设 |
| 默认用深色 | `$wgChromaDefaultScheme` | `dark` / `light` / `system` |
| 默认用阅读布局 | `$wgChromaDefaultLayout` | `reading` / `app` |
| 长文默认进入阅读模式 | `$wgChromaDefaultReadingMode` | `true` / `false` |
| 禁止用户自己改主题 | `$wgChromaAllowUserColor` | `false` |
| 禁止用户自己改布局 | `$wgChromaAllowUserLayout` | `false` |
| 禁止用户自己改阅读模式 | `$wgChromaAllowUserReadingMode` | `false` |

## 最常用：换主题色

在 `LocalSettings.php` 加：

```php
$wgChromaDefaultSeed = '#0061A4'; // 蓝色
```

Chroma 目前只支持八种预设：

| 颜色 | 值 |
|---|---|
| Teal（默认） | `#006A6A` |
| Blue | `#0061A4` |
| Green | `#386A20` |
| Violet | `#6750A4` |
| Rose | `#984061` |
| Amber | `#7D5700` |
| Indigo | `#4355B9` |
| Lime | `#4C6700` |

填其他颜色会回退到 Teal。想做更细的颜色定制，见 [主题与配色](theming.md)。

## 默认明暗模式

```php
$wgChromaDefaultScheme = 'dark';
```

可选：

- `system`：跟随访客的操作系统；
- `light`：浅色；
- `dark`：深色。

这只是一个默认值。如果允许用户覆盖，访客仍然可以在顶栏或 Preferences 里自己切换。

## 默认布局

```php
$wgChromaDefaultLayout = 'reading';
```

- `app`：默认的应用式布局。有左侧导航、顶栏、右侧目录。
- `reading`：阅读布局。隐藏左侧导航和目录，正文居中，更适合长文。

访客可以用顶栏的「显示选项」切换。

## 默认阅读模式

```php
$wgChromaDefaultReadingMode = true;
```

设为 `true` 后，文章页默认进入阅读模式：隐藏目录和页面操作，正文限宽。`Special:` 特殊页面不受影响。

## 允许/禁止用户覆盖

```php
$wgChromaAllowUserColor = true;
$wgChromaAllowUserLayout = true;
$wgChromaAllowUserReadingMode = true;
```

设为 `false` 后，用户在 Preferences 里保存的值不会生效，站点始终使用管理员默认值。

公开 wiki 建议保持 `true`；内部 wiki 或需要统一视觉的站点可以设为 `false`。

## 完整配置示例

把下面这段放在 `LocalSettings.php` 的皮肤配置区域即可：

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';

// 主题色：teal / blue / green / violet / rose / amber / indigo / lime
$wgChromaDefaultSeed = '#006A6A';

// system / light / dark
$wgChromaDefaultScheme = 'system';

// app / reading
$wgChromaDefaultLayout = 'app';

// 文章页默认阅读模式
$wgChromaDefaultReadingMode = false;

// 是否允许用户在 Preferences 里覆盖
$wgChromaAllowUserColor = true;
$wgChromaAllowUserLayout = true;
$wgChromaAllowUserReadingMode = true;
```

## Logo 和 favicon

Chroma 只在配置了真实自定义 `$wgLogos` 时显示 logo：

```php
$wgLogos = [
    '1x' => "$wgResourceBasePath/resources/assets/logo.png",
    'icon' => "$wgResourceBasePath/resources/assets/icon.png",
];
```

没有配置 `$wgLogos` 时，Chroma 只显示站点名，**不会**自动生成首字母图标。

站点图标由 MediaWiki 的 `$wgFavicon` 控制：

```php
$wgFavicon = "$wgResourceBasePath/favicon.ico";
```

## 加一点自定义 CSS

需要微调颜色时，可以在 `MediaWiki:Chroma.css` 写：

```css
:root {
  --md-sys-color-primary: #005a5a;
}
```

不建议直接改 `skins/Chroma/resources/styles/` 里的文件，因为更新皮肤时会被覆盖。

## 改完没生效？

1. 确认修改的是 wiki 根目录的 `LocalSettings.php`，不是皮肤目录里的文件；
2. 确认 PHP 语法没有错（少分号、少引号都会导致整站白屏）；
3. 刷新页面，或清理缓存；
4. 如果你设置了 `$wgChromaAllowUser* = false`，用户之前保存的偏好可能还会短暂显示；退出重登或清理缓存后再看。

## 相关页面

- [主题与配色](theming.md)：换色、深色模式、自定义 CSS
- [界面与导航](usage.md)：顶栏、目录、阅读模式怎么用
- [移动端](mobile.md)：MobileFrontend 全接管

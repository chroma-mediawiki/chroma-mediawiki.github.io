---
title: 安装
---

# 安装 Chroma

## 环境要求

- MediaWiki **1.43 LTS**、**1.45** 或 **1.46**；
- PHP 版本跟随对应 MediaWiki 要求（1.43: 8.1+，1.45: 8.2+，1.46: 8.3+）；
- 可写 `skins/` 目录，能在 `LocalSettings.php` 末尾追加配置；
- 不需要 Node.js，发布 ZIP 已包含编译后的 CSS/JS。

## 下载

从 [GitHub Releases](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases) 下载对应版本的 ZIP：

| MediaWiki | Release |
|---|---|
| 1.43 LTS | [v0.5.2-REL1_43](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.5.2-REL1_43) |
| 1.45 | [v0.5.2-REL1_45](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.5.2-REL1_45) |
| 1.46 | [v0.5.2-REL1_46](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.5.2-REL1_46) |

下载后解压，使目录结构变成：

```text
skins/
└── Chroma/
    ├── skin.json
    ├── includes/
    ├── templates/
    ├── resources/
    └── i18n/
```

::: warning 不要多套一层目录
如果解压后是 `skins/Chroma/Chroma/skin.json`，MediaWiki 找不到皮肤。`skin.json` 必须在 `skins/Chroma/skin.json`。
:::

## 启用

在 `LocalSettings.php` 末尾加入：

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

刷新页面。若皮肤没有生效：

- 检查 `skins/Chroma/skin.json` 是否存在；
- 检查 PHP 错误日志；
- 确认 `LocalSettings.php` 没有在 `wfLoadSkin` 前 `return`；
- 运行 `php maintenance/run.php rebuildLocalisationCache`（或 `rebuildMessages`）后重试。

## 可选：MobileFrontend 接管手机端

安装 [MobileFrontend](https://www.mediawiki.org/wiki/Extension:MobileFrontend) 后设置：

```php
wfLoadExtension( 'MobileFrontend' );
$wgDefaultMobileSkin = 'chroma';
```

手机 UA 会直接使用 Chroma 的响应式布局，不再依赖 MinervaNeue。详见 [移动端](mobile.md)。

## 更新

1. 备份 `skins/Chroma` 和 `LocalSettings.php`；
2. 用对应分支的新 ZIP 覆盖 `skins/Chroma`；
3. 清理缓存（`php maintenance/run.php purgeParserCache --age 0`）；
4. 访问 `Special:Version` 确认皮肤版本。

## 卸载

```php
// 从 LocalSettings.php 删除
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

然后把 `$wgDefaultSkin` 改回 `vector` 等其他皮肤，并删除 `skins/Chroma`。

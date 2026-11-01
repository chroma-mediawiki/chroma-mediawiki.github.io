---
title: 安装
---

# 安装 Chroma

这份说明假设你已经有一个能正常运行的 MediaWiki。如果还不会安装 MediaWiki，请先看 [MediaWiki 安装指南](https://www.mediawiki.org/wiki/Manual:Installation_guide/zh)。

## 你需要准备

- MediaWiki **1.43 LTS**、**1.45** 或 **1.46**；
- 对应版本的 PHP（1.43 需要 8.1+，1.45 需要 8.2+，1.46 需要 8.3+）；
- 能通过 FTP/SSH/文件管理器修改网站文件；
- 能编辑 wiki 根目录的 `LocalSettings.php`。

不需要 Node.js、npm 或编译工具；发布包里的 CSS/JS 已经是编译好的。

## 第一步：下载对应版本

先打开 `Special:Version` 确认 MediaWiki 版本，然后下载：

| 你的 MediaWiki | 下载地址 |
|---|---|
| 1.43 LTS | [v0.6.0-REL1_43](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.6.0-REL1_43) |
| 1.45 | [v0.6.0-REL1_45](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.6.0-REL1_45) |
| 1.46 | [v0.6.0-REL1_46](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases/tag/v0.6.0-REL1_46) |

下载的是 `Chroma-v0.6.0-REL1_xx.zip`。

## 第二步：放进 skins/Chroma

在 wiki 根目录找到 `skins` 文件夹（和 `LocalSettings.php`、`includes` 同级）。

1. 在 `skins` 里新建文件夹 `Chroma`；
2. 把 ZIP **里面的文件**解压到这个文件夹；
3. 最终路径必须是：

```text
你的wiki/
├── LocalSettings.php
├── includes/
├── skins/
│   └── Chroma/
│       ├── skin.json
│       ├── includes/
│       ├── templates/
│       ├── resources/
│       └── i18n/
```

::: warning 不要多套一层
如果变成 `skins/Chroma/Chroma/skin.json`，MediaWiki 找不到皮肤。`skin.json` 必须直接在 `skins/Chroma/` 下。
:::

## 第三步：启用

用文本编辑器打开 wiki 根目录的 `LocalSettings.php`，在**文件末尾**加上：

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

保存，然后刷新 wiki 页面。正常情况下会立刻变成 Chroma。

如果 `LocalSettings.php` 末尾本来就有 `?>`，请把这两行放在 `?>` **前面**；更推荐直接删掉 `?>`，避免多余空白输出。

## 装完没变化？

按顺序检查：

1. **路径**：`skins/Chroma/skin.json` 是否存在？不是 `skins/Chroma/Chroma/skin.json`；
2. **配置**：两行配置是否真的写进 `LocalSettings.php`，有没有拼错大小写；
3. **权限**：PHP 进程是否至少能读取 `skins/Chroma`；
4. **缓存**：刷新页面，或运行 `php maintenance/run.php purgeParserCache --age 0`；
5. **错误日志**：看 PHP/Apache/Nginx 的 error log，通常会有明确原因。

还可以访问 `Special:Version`，确认列表里是否出现 **Chroma** 皮肤。

## 可选：让手机端也用 Chroma

如果你想让手机访问也直接使用 Chroma：

1. 安装 [MobileFrontend](https://www.mediawiki.org/wiki/Extension:MobileFrontend)；
2. 在 `LocalSettings.php` 加：

```php
wfLoadExtension( 'MobileFrontend' );
$wgDefaultMobileSkin = 'chroma';
```

这样手机浏览器会使用 Chroma 的响应式布局，不再使用 MinervaNeue。详见 [移动端](mobile.md)。

## 以后怎么更新

1. 先备份 `skins/Chroma` 和 `LocalSettings.php`；
2. 下载同一分支的新 ZIP；
3. 用新文件覆盖 `skins/Chroma`；
4. 清理缓存，刷新页面；
5. 到 `Special:Version` 确认版本号。

## 怎么卸载

1. 从 `LocalSettings.php` 删除：

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

2. 把 `$wgDefaultSkin` 改回其他皮肤（例如 `vector`）；
3. 删除 `skins/Chroma` 文件夹。

## 还是装不上？

把下面信息发到 [GitHub Issues](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/issues)：

- MediaWiki 版本；
- PHP 版本；
- Chroma 版本/分支；
- 报错截图；
- PHP 错误日志里的相关行。

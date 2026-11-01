---
title: 快速开始
---

# 五分钟装好

## 1. 确认版本

打开 `Special:Version`，看 MediaWiki 是 1.43、1.45 还是 1.46。

## 2. 下载对应 ZIP

- 1.43 LTS → `v0.5.2-REL1_43`
- 1.45 → `v0.5.2-REL1_45`
- 1.46 → `v0.5.2-REL1_46`

下载地址在 [Releases](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/releases)。

## 3. 放到 skins/Chroma

把 ZIP 里的文件解压到：

```text
skins/Chroma/skin.json
```

不是 `skins/Chroma/Chroma/skin.json`。

## 4. 在 LocalSettings.php 启用

在文件末尾加：

```php
wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';
```

保存，刷新页面。

## 5. 打开设置看看

登录后访问：

```text
Special:Preferences#mw-prefsection-rendering
```

在「外观」里可以改：

- 主题色：teal / blue / green / violet；
- 明暗：跟随系统 / 浅色 / 深色；
- 布局：应用式 / 阅读式；
- 阅读模式。

顶栏右侧的「显示选项」也能快速切换。

## 下一步

- [安装](installation.md)：更完整的步骤和排错
- [配置](configuration.md)：改默认值
- [主题与配色](theming.md)：换色
- [界面与导航](usage.md)：每个按钮是干什么的

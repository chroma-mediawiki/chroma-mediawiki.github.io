---
title: 移动端
---

# 移动端

## 手机访问会看到什么

如果没装 MobileFrontend，Chroma 仍然是响应式的：窄屏会收起左侧导航，正文自动限宽。

如果装 MobileFrontend 并设置 Chroma 为默认手机皮肤，手机访问会直接使用 Chroma：

- 左上角 ☰ 打开导航；
- 搜索折叠成放大镜；
- 页面标签和操作收成一排；
- 目录在窄屏隐藏；
- MobileFrontend 的章节默认展开，不会只剩标题。

## 配置步骤

1. 安装 [MobileFrontend](https://www.mediawiki.org/wiki/Extension:MobileFrontend)；
2. 在 `LocalSettings.php` 加：

```php
wfLoadExtension( 'MobileFrontend' );
$wgDefaultMobileSkin = 'chroma';
```

3. 用手机访问，或把浏览器 UA 切到手机，确认页面样式。

## 和 MinervaNeue 的关系

Chroma 不依赖 MinervaNeue。设置 `$wgDefaultMobileSkin = 'chroma';` 后，手机端不会再使用 MinervaNeue。

MinervaNeue 可以继续安装，不影响 Chroma。

## 还要 `?useskin=chroma` 吗

不需要。手机 UA 默认就是 Chroma。`?useskin=chroma` 只用于桌面 UA 强制预览 Chroma。

## 手机端还是旧皮肤？

按顺序检查：

1. `$wgDefaultMobileSkin = 'chroma';` 是否在 `LocalSettings.php` 生效；
2. MobileFrontend 是否已加载；
3. 清除浏览器 cookie 和缓存；
4. 到 `Special:Version` 确认 Chroma 已注册；
5. 是否有其他 MobileFrontend 配置覆盖了默认皮肤。

## 不装 MobileFrontend 可以吗？

可以。Chroma 本身支持响应式；MobileFrontend 只是负责手机检测和移动专用功能。

## 相关页面

- [界面与导航](usage.md)
- [配置](configuration.md)
- [常见问题](faq.md)

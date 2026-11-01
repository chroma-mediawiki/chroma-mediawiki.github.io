---
title: 移动端
---

# 移动端与 MobileFrontend

## 全接管

安装 [MobileFrontend](https://www.mediawiki.org/wiki/Extension:MobileFrontend) 后：

```php
wfLoadExtension( 'MobileFrontend' );
$wgDefaultMobileSkin = 'chroma';
```

手机 UA 直接使用 Chroma，不再依赖 MinervaNeue。

## 行为

- 抽屉变成覆盖层；
- 搜索折叠为图标；
- 页面标签与页面操作在工具栏中单行排列；
- 操作入口为 44×44 图标按钮；
- MobileFrontend 的章节折叠默认展开，正文不会被折叠成只有标题；
- TOC 在窄屏隐藏。

## 不再需要 `?useskin=chroma`

默认手机 UA 就是 Chroma。`?useskin=chroma` 只用于强制桌面 UA 使用 Chroma 调试。

## 不安装 MobileFrontend 时

Chroma 本身是响应式的，窄屏仍可阅读；安装 MobileFrontend 只是接管手机端检测与移动专用功能。

## 排查

如果手机端仍然是 MinervaNeue：

1. 确认 `$wgDefaultMobileSkin = 'chroma';` 在 `LocalSettings.php` 中生效；
2. 清除浏览器 cookie 和缓存；
3. 检查 `Special:Version` 中 Chroma 是否已注册；
4. 检查 MobileFrontend 的 `DefaultMobileSkin` 配置是否被其他配置覆盖。

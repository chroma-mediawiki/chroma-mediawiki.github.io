---
title: 测试
---

# 测试

当前仓库没有自动化单元测试或 Playwright 套件，CI 只做：

- PHP lint（`includes/`）；
- JSON 校验（`skin.json`、`package.json`、i18n）；
- 必需文件检查；
- token / preset 生成与 drift 检查。

## 手动测试

### 安装

1. 准备对应 MediaWiki 版本 + SQLite；
2. 把皮肤 symlink 到 `skins/Chroma`；
3. `wfLoadSkin( 'Chroma' )`，设置默认皮肤；
4. 检查首页、编辑、历史、差异、Preferences、登录、`Special:Version`。

### 扩展矩阵

用包含 `<ref>`、`<math>`、`<syntaxhighlight>`、`&#123;&#123;#if:&#125;&#125;`、`<poem>`、`<inputbox>` 的页面检查：

- HTTP 200；
- 无 PHP error / 浏览器 console error；
- 无横向溢出；
- 关键控件存在。

### 移动端

- Pixel 7 等手机 UA；
- MobileFrontend 安装且 `$wgDefaultMobileSkin = 'chroma'`；
- 检查抽屉、搜索、章节展开、工具栏图标。

### 可访问性

当前没有自动化 axe 检查。手动检查：

- 键盘可达；
- 焦点可见；
- 菜单/抽屉 ARIA；
- `prefers-reduced-motion`。

## 提交前

```bash
npm run lint
php -l includes/*.php
```

发布前按 [发布流程](releasing.md) 跑三个版本线。

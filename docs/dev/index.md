---
title: 开发概览
---

# 开发概览

Chroma 是一个 MediaWiki 皮肤仓库，没有构建步骤也能安装：发布 ZIP 已包含 CSS/JS/i18n。

本组文档面向修改皮肤本身的开发者。

## 快速命令

```bash
git clone https://github.com/chroma-mediawiki/mediawiki-skins-Chroma.git
cd mediawiki-skins-Chroma

npm install
npm run tokens    # 重新生成 tokens.css / tokens.json
npm run presets   # 重新生成预设色板
npm run lint      # JS + CSS
```

## 目录

- [仓库结构](architecture.md)
- [设计 token](tokens.md)
- [分支与版本](branches.md)
- [测试](testing.md)
- [发布流程](releasing.md)
- [参与贡献](contributing.md)

## 当前版本

文档对应 **v0.5.2**。三条维护分支：`REL1_43`、`REL1_45`、`REL1_46`。

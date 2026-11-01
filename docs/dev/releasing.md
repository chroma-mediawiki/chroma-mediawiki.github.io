---
title: 发布流程
---

# 发布流程

1. 更新 `skin.json` 的 `version` 和 `package.json`；
2. 更新 `CHANGELOG.md`；
3. 在三个分支分别同步改动，保留各自 `menus` / `requires`；
4. 跑 1.43 / 1.45 / 1.46 冒烟；
5. 在分支 head 创建标签：

```bash
v0.5.2-REL1_43
v0.5.2-REL1_45
v0.5.2-REL1_46
```

6. `release.yml` 在标签上构建 ZIP 并创建 GitHub Release；
7. 更新 README 下载表、本网站版本号和 release 链接；
8. 确认 ZIP 结构：

```text
skin.json
includes/
templates/
resources/
i18n/
screenshots/   # README 图片
LICENSE
NOTICE
```

## 版本号

- 补丁：修复、样式、兼容性；
- 次版本：新布局/组件/扩展矩阵；
- 主版本：不兼容的模板或配置变更。

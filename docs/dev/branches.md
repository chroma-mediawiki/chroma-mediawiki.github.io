---
title: 分支与版本
---

# 分支与版本

| 分支 | MediaWiki | `requires.MediaWiki` | 菜单键 |
|---|---|---|---|
| `REL1_43` | 1.43 LTS | `>=1.43 <1.44` | legacy：`namespaces` / `personal` |
| `REL1_45` | 1.45 | `>=1.45 <1.46` | 新菜单名 |
| `REL1_46` | 1.46 | `>=1.46 <1.47` | 新菜单名 |
| `main` | 开发 | 宽范围 | 新菜单名 |

## 规则

- 每个分支独立修兼容问题，不把 1.46 的 workaround 合回 1.43；
- 1.43 模板使用 `data-namespaces` / `data-personal`；
- 1.45 / 1.46 使用 `data-associated-pages` / `data-user-menu`；
- 发布标签形如 `v0.6.0-REL1_43`、`v0.6.0-REL1_45`、`v0.6.0-REL1_46`；
- 三个标签分别由 `release.yml` 构建 ZIP。

## 新增版本线

1. 从 `main` 创建新分支；
2. 修改 `skin.json` 的 `requires.MediaWiki`；
3. 按目标版本调整 `menus`、Codex/OOUI 桥接、PHP 最低版本；
4. 在 1.xx 真机跑安装、编辑、历史、Preferences、移动端；
5. 更新本页和官网的[兼容性](/guide/compatibility)页面。

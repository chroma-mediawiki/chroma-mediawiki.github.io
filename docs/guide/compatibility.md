---
title: 兼容性
---

# 兼容性

## MediaWiki 版本

Chroma 按 MediaWiki 线维护独立分支：

| MediaWiki | 分支 | 最低 PHP |
|---|---|---|
| 1.43 LTS | `REL1_43` | 8.1 |
| 1.45 | `REL1_45` | 8.2 |
| 1.46 | `REL1_46` | 8.3 |

`skin.json` 的 `requires.MediaWiki` 已按分支锁定；不要把 1.46 的分支装到 1.43。

## 扩展

### 1.46

本地 1.46.0 harness 配置了 31 个 Tier 1 扩展（AbuseFilter 因 Equivset 依赖未启用），验证了 Cite、Math、SyntaxHighlight、InputBox、CategoryTree、Poem、ParserFunctions、Echo、Linter 等界面。

### 1.43 / 1.45

两个版本各安装了 30 个 Tier 1 扩展，矩阵页覆盖：

- `<ref>` / 引用列表；
- `<math>`（native MathML）；
- `<syntaxhighlight>`；
- `&#123;&#123;#if:&#125;&#125;`；
- `<poem>`；
- `<inputbox>`。

扩展清单、限制和截图见皮肤仓库的 [兼容性页面](/guide/compatibility)。

## 已知限制

- **AbuseFilter**：测试环境缺少 `Wikimedia\Equivset`，未启用；这不是皮肤代码问题。
- **VisualEditor / DiscussionTools**：需要 VisualEditor 的 `lib/ve` 子模块资源，只在 1.46 harness 完整验证。
- **Math**：本地使用 `native` MathML；`mathml` 模式需要 RESTBase/Mathoid。
- **扩展自动化**：当前没有按扩展的自动化 Playwright 套件，矩阵是手动验证。
- **任意 seed**：只支持四套预设，不支持用户任意输入颜色。
- **完整 MD3**：Chroma 是 MD3 风格 token 层 + 部分 Expressive 模式，不是完整 Material 3 组件库。

## 浏览器

支持当前两个版本的 Chrome、Edge、Firefox、Safari，不支持 IE。

## 报告问题

请附上：

- MediaWiki 版本；
- Chroma 版本 / 分支；
- PHP 版本；
- 扩展名与版本；
- 复现页面、截图、浏览器 console 与 PHP 错误日志。

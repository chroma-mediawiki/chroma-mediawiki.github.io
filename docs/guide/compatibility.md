---
title: 兼容性
---

# 兼容性

## 支持哪些 MediaWiki

| MediaWiki | 分支 | 说明 |
|---|---|---|
| 1.43 LTS | `REL1_43` | 长期支持线 |
| 1.45 | `REL1_45` | 稳定线 |
| 1.46 | `REL1_46` | 当前线 |

请使用对应的 Release 包。1.46 的包不要装到 1.43 上，反之亦然。

不支持 MediaWiki 1.44（不是 LTS，没有单独分支）。

## 支持哪些扩展

Chroma 本身只改外观和布局，不修改扩展输出。我们实际测试过：

- **Cite**：`<ref>`、引用列表、脚注；
- **Math**：`<math>`；
- **SyntaxHighlight**：代码块；
- **ParserFunctions**：`#if` 等；
- **Poem**：`<poem>`；
- **InputBox**、**CategoryTree**；
- 登录、历史、版本差异、Preferences 等特殊页；
- 1.46 下的 VisualEditor / DiscussionTools（本地测试环境）。

1.46 测试环境配置了 31 个 Tier 1 扩展；1.43 / 1.45 各安装 30 个。不是每个社区扩展都逐项验证过，遇到问题请带扩展名和版本报告。

## 已知限制

- **AbuseFilter**：测试环境缺少 `Wikimedia\Equivset`，未启用；不是皮肤导致。
- **Math**：本地使用 native MathML；`mathml` 模式需要 RESTBase/Mathoid。
- **任意主题色**：只支持四种预设，不支持任意 seed。
- **完整 Material 3**：Chroma 使用 MD3 风格的 token，并实现部分 Expressive 视觉，不是完整 Material 3 组件库。
- **自动化测试**：当前没有按扩展的自动化测试套件，扩展矩阵是手动验证。

## 浏览器

支持当前版本的 Chrome、Edge、Firefox、Safari。不支持 IE。

## 遇到兼容问题怎么报告

请附上：

- MediaWiki 版本；
- Chroma 版本和分支；
- PHP 版本；
- 扩展名称与版本；
- 出问题的页面链接或截图；
- 浏览器 console 和 PHP 错误日志。

到 [GitHub Issues](https://github.com/chroma-mediawiki/mediawiki-skins-Chroma/issues) 提交。

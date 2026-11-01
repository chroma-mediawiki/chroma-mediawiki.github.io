<p align="right"><strong>简体中文</strong> · <a href="README.en.md">English</a></p>

<img src="logo.svg" width="72" height="72" align="right" alt="Chroma logo">

# Chroma docs

Chroma 的官方文档与官网，使用 VitePress 构建，部署到 GitHub Pages。

- 中文站点：https://chroma-mediawiki.github.io/chroma-docs/
- English site: https://chroma-mediawiki.github.io/chroma-docs/en/
- 皮肤仓库：https://github.com/chroma-mediawiki/mediawiki-skins-Chroma
- 页面语言会按浏览器语言自动选择：中文浏览器进入中文版，其他语言进入英文版。

## 本地开发

```bash
npm install --include=dev
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 部署

推送到 `main` 后由 `.github/workflows/pages.yml` 构建并发布到 GitHub Pages。

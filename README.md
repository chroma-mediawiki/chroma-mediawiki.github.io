# Chroma docs

Chroma 的官方文档与官网，使用 VitePress 构建，部署到 GitHub Pages。

- 站点：https://chroma-mediawiki.github.io/chroma-docs/
- 皮肤仓库：https://github.com/chroma-mediawiki/mediawiki-skins-Chroma

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 部署

推送到 `main` 后由 `.github/workflows/pages.yml` 构建并发布到 GitHub Pages。

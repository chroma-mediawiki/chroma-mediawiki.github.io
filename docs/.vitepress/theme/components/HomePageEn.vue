<script setup lang="ts">
import { withBase } from 'vitepress'

const features = [
	{
		title: 'Color system',
		body: 'Seed #006A6A by default, with teal, blue, green and violet presets. Color, type, shape, elevation and motion all resolve to --md-sys-* tokens.',
		icon: 'M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
	},
	{
		title: 'Reading first',
		body: 'Quiet content, receding tools. Reading layout hides the drawer and TOC; reading mode also removes page actions.',
		icon: 'M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 4h5v8l-2.5-1.5L6 12V4z'
	},
	{
		title: 'Two layouts',
		body: 'The app layout and reading layout share one template. Switch from Preferences or the top-bar display options.',
		icon: 'M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z'
	},
	{
		title: 'Light / dark',
		body: 'System, light and dark. Dark mode is not an inversion: it remaps the same semantic color roles onto dark surfaces.',
		icon: 'M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36A5.39 5.39 0 0 1 12 3z'
	},
	{
		title: 'Mobile takeover',
		body: 'With MobileFrontend, set $wgDefaultMobileSkin = "chroma" so mobile UAs use Chroma directly instead of MinervaNeue.',
		icon: 'M17 1H7a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm-5 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5-4H7V5h10v12z'
	},
	{
		title: 'Built for MediaWiki',
		body: 'No replacement page model. Pages, talk, history, editors and extensions remain powered by MediaWiki; the skin owns presentation.',
		icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
	}
]

const shots = [
	{ title: 'Light', file: 'content-light-en.png', note: 'MediaWiki 1.46.0' },
	{ title: 'Dark', file: 'content-dark-en.png', note: 'Same semantic roles' },
	{ title: 'Mobile', file: 'mobile-en.png', note: 'MobileFrontend takeover' }
]

const versions = [
	{ label: '1.43 LTS', branch: 'REL1_43', tag: 'v0.5.2-REL1_43' },
	{ label: '1.45', branch: 'REL1_45', tag: 'v0.5.2-REL1_45' },
	{ label: '1.46', branch: 'REL1_46', tag: 'v0.5.2-REL1_46' }
]

const repo = 'https://github.com/chroma-mediawiki/mediawiki-skins-Chroma'
const releases = `${repo}/releases`
const shot = (file: string) => withBase(`/screenshots/${file}`)
const link = (path: string) => withBase(path)
</script>

<template>
	<div class="chroma-home">
		<section class="home-section">
			<p class="home-eyebrow">Chroma · MediaWiki skin</p>
			<h2 class="home-title">Not a reskin: color and reading as a system</h2>
			<p class="home-lede">
				Chroma brings Material Design 3 token thinking to MediaWiki: semantic colors generated from a seed, one variable set driving content, top bar, TOC, forms and extension UI.
			</p>

			<div class="feature-grid">
				<article v-for="feature in features" :key="feature.title" class="feature-card">
					<span class="feature-icon">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path :d="feature.icon" /></svg>
					</span>
					<h3>{{ feature.title }}</h3>
					<p>{{ feature.body }}</p>
				</article>
			</div>
		</section>

		<section class="home-section gallery-section">
			<div class="section-heading">
				<div>
					<p class="home-eyebrow">Screenshots</p>
					<h2 class="home-title">Inside real MediaWiki</h2>
				</div>
				<a class="text-link" :href="repo" target="_blank" rel="noreferrer">View repository →</a>
			</div>
			<div class="gallery-grid">
				<figure v-for="item in shots" :key="item.file" class="shot-card">
					<img :src="shot(item.file)" :alt="item.title" loading="lazy" />
					<figcaption>
						<strong>{{ item.title }}</strong>
						<span>{{ item.note }}</span>
					</figcaption>
				</figure>
			</div>
		</section>

		<section class="home-section">
			<div class="quickstart">
				<div>
					<p class="home-eyebrow">Quick start</p>
					<h2 class="home-title">Three-minute install</h2>
					<ol class="step-list">
						<li><span>01</span><div><strong>Download the matching ZIP</strong><p>Pick the 1.43, 1.45 or 1.46 package from Releases.</p></div></li>
						<li><span>02</span><div><strong>Extract into skins/Chroma</strong><p>Make sure skin.json is at <code>skins/Chroma/skin.json</code>。</p></div></li>
						<li><span>03</span><div><strong>Enable in LocalSettings.php</strong><p>Add the two lines, save and refresh.</p></div></li>
					</ol>
				</div>
				<div class="code-panel">
					<div class="code-panel__bar"><span></span><span></span><span></span><em>LocalSettings.php</em></div>
					<pre><code>wfLoadSkin( 'Chroma' );
$wgDefaultSkin = 'chroma';

// Optional: MobileFrontend takeover
$wgDefaultMobileSkin = 'chroma';</code></pre>
					<a class="code-panel__link" :href="link('/en/guide/installation')">Full installation guide →</a>
				</div>
			</div>
		</section>

		<section class="home-section">
			<p class="home-eyebrow">Versions</p>
			<h2 class="home-title">Three maintained lines</h2>
			<div class="version-grid">
				<a v-for="version in versions" :key="version.branch" class="version-card" :href="`${releases}/tag/${version.tag}`" target="_blank" rel="noreferrer">
					<span class="version-label">{{ version.label }}</span>
					<strong>{{ version.branch }}</strong>
					<code>{{ version.tag }}</code>
				</a>
			</div>
		</section>

		<section class="home-cta">
			<div>
				<p class="home-eyebrow">Start here</p>
				<h2>Read the guide, then install</h2>
				<p>From installation and config to token customization, the docs are all here.</p>
			</div>
			<div class="cta-actions">
				<a class="cta-button cta-button--primary" :href="link('/en/guide/installation')">Get started</a>
				<a class="cta-button cta-button--ghost" :href="repo" target="_blank" rel="noreferrer">GitHub</a>
			</div>
		</section>
	</div>
</template>

<style scoped>
.chroma-home { padding: 0 24px 96px; }
.home-section { max-width: 1152px; margin: 0 auto; padding: 64px 0; }
.home-eyebrow { margin: 0 0 10px; color: var(--vp-c-brand-1); font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.home-title { margin: 0; font-size: clamp(1.75rem, 3vw, 2.6rem); line-height: 1.15; letter-spacing: -.03em; }
.home-lede { max-width: 680px; margin: 18px 0 0; color: var(--vp-c-text-2); font-size: 17px; line-height: 1.8; }
.feature-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 40px; }
.feature-card { padding: 24px; border: 1px solid var(--chroma-outline); border-radius: 24px; background: var(--chroma-surface-container); }
.feature-icon { display: grid; place-items: center; width: 44px; height: 44px; margin-bottom: 18px; border-radius: 14px; background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.feature-icon svg { width: 24px; height: 24px; fill: currentColor; }
.feature-card h3 { margin: 0 0 8px; font-size: 18px; }
.feature-card p { margin: 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.75; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; }
.text-link { color: var(--vp-c-brand-1); font-size: 14px; font-weight: 600; text-decoration: none; white-space: nowrap; }
.text-link:hover { text-decoration: underline; }
.gallery-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 28px; }
.shot-card { margin: 0; overflow: hidden; border: 1px solid var(--chroma-outline); border-radius: 22px; background: var(--chroma-surface-container); }
.shot-card img { display: block; width: 100%; height: 240px; object-fit: cover; object-position: top; }
.shot-card figcaption { display: flex; justify-content: space-between; gap: 8px; padding: 12px 16px; font-size: 13px; }
.shot-card figcaption span { color: var(--vp-c-text-3); }
.quickstart { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.step-list { display: grid; gap: 22px; margin: 30px 0 0; padding: 0; list-style: none; }
.step-list li { display: grid; grid-template-columns: 38px 1fr; gap: 14px; }
.step-list li > span { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); font-size: 12px; font-weight: 700; }
.step-list strong { display: block; margin-top: 4px; }
.step-list p { margin: 4px 0 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.6; }
.step-list code { font-size: 13px; }
.code-panel { overflow: hidden; border-radius: 22px; background: #042f2e; color: #e6f4f3; box-shadow: 0 18px 50px rgba(0, 106, 106, .18); }
.code-panel__bar { display: flex; align-items: center; gap: 6px; padding: 14px 18px; background: rgba(255, 255, 255, .06); }
.code-panel__bar span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255, 255, 255, .35); }
.code-panel__bar em { margin-left: 8px; color: #a8c7c5; font-size: 12px; font-style: normal; }
.code-panel pre { margin: 0; padding: 22px 20px 8px; overflow-x: auto; font-size: 13px; line-height: 1.8; }
.code-panel code { background: none; color: inherit; font-size: inherit; }
.code-panel__link { display: block; padding: 16px 20px 20px; color: #8de3e0; font-size: 13px; text-decoration: none; }
.code-panel__link:hover { text-decoration: underline; }
.version-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 28px; }
.version-card { display: grid; gap: 6px; padding: 22px; border: 1px solid var(--chroma-outline); border-radius: 20px; background: var(--chroma-surface-container); color: var(--vp-c-text-1); text-decoration: none; }
.version-card:hover { border-color: var(--vp-c-brand-1); }
.version-label { color: var(--vp-c-brand-1); font-size: 13px; font-weight: 700; }
.version-card strong { font-size: 20px; }
.version-card code { color: var(--vp-c-text-2); font-size: 12px; }
.home-cta { display: flex; align-items: center; justify-content: space-between; gap: 28px; max-width: 1152px; margin: 24px auto 0; padding: 32px 36px; border-radius: 28px; background: linear-gradient(135deg, #006a6a, #004f4f); color: #fff; }
.home-cta .home-eyebrow { color: #9cf2ef; }
.home-cta h2 { margin: 0 0 6px; font-size: 28px; }
.home-cta p { margin: 0; color: #cce8e7; font-size: 14px; }
.cta-actions { display: flex; gap: 10px; flex: 0 0 auto; }
.cta-button { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 22px; border-radius: 999px; font-size: 14px; font-weight: 600; text-decoration: none; }
.cta-button--primary { background: #fff; color: #004f4f; }
.cta-button--ghost { border: 1px solid rgba(255, 255, 255, .45); color: #fff; }
@media (max-width: 900px) {
	.feature-grid, .gallery-grid, .version-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
	.quickstart { grid-template-columns: 1fr; gap: 28px; }
	.home-cta { align-items: flex-start; flex-direction: column; }
}
@media (max-width: 640px) {
	.chroma-home { padding-inline: 16px; }
	.home-section { padding: 40px 0; }
	.feature-grid, .gallery-grid, .version-grid { grid-template-columns: 1fr; }
	.section-heading { align-items: flex-start; flex-direction: column; gap: 10px; }
	.home-cta { padding: 26px 22px; }
	.home-cta h2 { font-size: 23px; }
	.cta-actions { width: 100%; }
	.cta-button { flex: 1; }
}
</style>

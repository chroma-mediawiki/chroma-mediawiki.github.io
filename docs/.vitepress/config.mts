import { defineConfig } from 'vitepress'

const repo = 'https://github.com/chroma-mediawiki/mediawiki-skins-Chroma'
const docsRepo = 'https://github.com/chroma-mediawiki/chroma-docs'
const site = 'https://chroma-mediawiki.github.io/chroma-docs'

const zhTheme = {
	nav: [
		{ text: '指南', link: '/guide/', activeMatch: '/guide/' },
		{ text: '配置', link: '/guide/configuration' },
		{ text: '开发', link: '/dev/', activeMatch: '/dev/' },
		{ text: '兼容性', link: '/guide/compatibility' },
		{ text: '更新日志', link: '/changelog' },
		{ text: 'QQ 群', link: 'https://qm.qq.com/q/zSaZRWS4eY' }
	],
	sidebar: {
		'/guide/': [
			{
				text: '开始使用',
				items: [
					{ text: '概览', link: '/guide/' },
					{ text: '安装', link: '/guide/installation' },
					{ text: '快速开始', link: '/guide/quickstart' },
					{ text: '配置', link: '/guide/configuration' }
				]
			},
			{
				text: '使用',
				items: [
					{ text: '界面与导航', link: '/guide/usage' },
					{ text: '主题与配色', link: '/guide/theming' },
					{ text: '移动端', link: '/guide/mobile' },
					{ text: '兼容性', link: '/guide/compatibility' },
					{ text: '常见问题', link: '/guide/faq' }
				]
			}
		],
		'/dev/': [
			{
				text: '开发',
				items: [
					{ text: '概览', link: '/dev/' },
					{ text: '仓库结构', link: '/dev/architecture' },
					{ text: '设计 token', link: '/dev/tokens' },
					{ text: '分支与版本', link: '/dev/branches' },
					{ text: '测试', link: '/dev/testing' },
					{ text: '发布流程', link: '/dev/releasing' },
					{ text: '参与贡献', link: '/dev/contributing' }
				]
			}
		]
	},
	search: {
		provider: 'local',
		options: {
			translations: {
				button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
				modal: {
					displayDetails: '显示详情',
					resetButtonTitle: '清除查询',
					backButtonTitle: '返回',
					noResultsText: '没有找到结果',
					footer: {
						selectText: '选择',
						selectKeyAriaLabel: '回车',
						navigateText: '切换',
						navigateUpKeyAriaLabel: '上箭头',
						navigateDownKeyAriaLabel: '下箭头',
						closeText: '关闭',
						closeKeyAriaLabel: 'Esc'
					}
				}
			}
		}
	},
	editLink: { pattern: `${docsRepo}/edit/main/docs/:path`, text: '在 GitHub 上编辑此页' },
	footer: {
		message: 'GPL-3.0-or-later · 独立社区项目，与 Google 无关联',
		copyright: 'Copyright © 2026 Chroma contributors'
	},
	outline: { level: [2, 3], label: '本页目录' },
	docFooter: { prev: '上一篇', next: '下一篇' },
	lastUpdatedText: '最后更新',
	returnToTopLabel: '回到顶部',
	sidebarMenuLabel: '菜单',
	darkModeSwitchLabel: '外观',
	lightModeSwitchTitle: '浅色',
	darkModeSwitchTitle: '深色'
}

const enTheme = {
	search: { provider: 'local' },
	nav: [
		{ text: 'Guide', link: '/en/guide/', activeMatch: '/en/guide/' },
		{ text: 'Configuration', link: '/en/guide/configuration' },
		{ text: 'Development', link: '/en/dev/', activeMatch: '/en/dev/' },
		{ text: 'Compatibility', link: '/en/guide/compatibility' },
		{ text: 'Changelog', link: '/en/changelog' },
		{ text: 'QQ group', link: 'https://qm.qq.com/q/zSaZRWS4eY' }
	],
	sidebar: {
		'/en/guide/': [
			{
				text: 'Get started',
				items: [
					{ text: 'Overview', link: '/en/guide/' },
					{ text: 'Installation', link: '/en/guide/installation' },
					{ text: 'Quick start', link: '/en/guide/quickstart' },
					{ text: 'Configuration', link: '/en/guide/configuration' }
				]
			},
			{
				text: 'Using Chroma',
				items: [
					{ text: 'Interface & navigation', link: '/en/guide/usage' },
					{ text: 'Themes & color', link: '/en/guide/theming' },
					{ text: 'Mobile', link: '/en/guide/mobile' },
					{ text: 'Compatibility', link: '/en/guide/compatibility' },
					{ text: 'FAQ', link: '/en/guide/faq' }
				]
			}
		],
		'/en/dev/': [
			{
				text: 'Development',
				items: [
					{ text: 'Overview', link: '/en/dev/' },
					{ text: 'Repository layout', link: '/en/dev/architecture' },
					{ text: 'Design tokens', link: '/en/dev/tokens' },
					{ text: 'Branches & versions', link: '/en/dev/branches' },
					{ text: 'Testing', link: '/en/dev/testing' },
					{ text: 'Releasing', link: '/en/dev/releasing' },
					{ text: 'Contributing', link: '/en/dev/contributing' }
				]
			}
		]
	},
	editLink: { pattern: `${docsRepo}/edit/main/docs/:path`, text: 'Edit this page on GitHub' },
	footer: {
		message: 'GPL-3.0-or-later · Independent community project, not affiliated with Google',
		copyright: 'Copyright © 2026 Chroma contributors'
	},
	outline: { level: [2, 3], label: 'On this page' },
	docFooter: { prev: 'Previous page', next: 'Next page' },
	lastUpdatedText: 'Last updated',
	returnToTopLabel: 'Return to top',
	sidebarMenuLabel: 'Menu',
	darkModeSwitchLabel: 'Appearance',
	lightModeSwitchTitle: 'Light',
	darkModeSwitchTitle: 'Dark'
}

export default defineConfig({
	lang: 'zh-CN',
	title: 'Chroma',
	titleTemplate: ':title · Chroma',
	description: '色彩驱动、阅读优先的 MediaWiki 皮肤。',

	base: '/chroma-docs/',
	cleanUrls: true,
	lastUpdated: true,

	locales: {
		root: {
			label: '简体中文',
			lang: 'zh-CN',
			themeConfig: zhTheme
		},
		en: {
			label: 'English',
			lang: 'en',
			link: '/en/',
			themeConfig: enTheme
		}
	},

	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/chroma-docs/logo.svg' }],
		['meta', { name: 'theme-color', content: '#006A6A' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:title', content: 'Chroma · MediaWiki skin' }],
		['meta', { property: 'og:description', content: 'A color-first MediaWiki skin with Material 3-style tokens and reading-first layouts.' }],
		['meta', { property: 'og:image', content: `${site}/screenshots/content-light-en.png` }],
		['script', {}, `(function(){try{var p=location.pathname;if(p.indexOf('/chroma-docs/en/')===0)return;var s=localStorage.getItem('chroma-lang');if(s==='zh'||s==='en')return;var langs=navigator.languages||[navigator.language||'en'];var lang=langs[0]||'en';if(!/^zh/i.test(lang)){var rest=p.replace('/chroma-docs','')||'/';if(rest.charAt(0)!=='/')rest='/'+rest;location.replace('/chroma-docs/en'+rest+location.search+location.hash);}}catch(e){}})();`]
	],

	themeConfig: {
		logo: '/logo.svg',
		siteTitle: 'Chroma',
		socialLinks: [{ icon: 'github', link: repo }],
		search: { provider: 'local' }
	},

	vite: {
		server: { fs: { allow: ['..'] } }
	}
})

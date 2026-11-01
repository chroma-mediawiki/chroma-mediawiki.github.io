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
		{ text: 'QQ', link: 'https://qm.qq.com/q/zSaZRWS4eY' },
		{ text: 'Bilibili', link: 'https://b23.tv/QiGlLcm' }
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
		{ text: 'QQ', link: 'https://qm.qq.com/q/zSaZRWS4eY' },
		{ text: 'Bilibili', link: 'https://b23.tv/QiGlLcm' }
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
		socialLinks: [
			{ icon: 'github', link: repo },
			{ icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673c.54.065 2.103-2.472 2.103-2.472c0 1.469.756 3.387 2.394 4.771c-.612.188-1.363.479-1.845.835c-.434.32-.379.646-.301.778c.343.578 5.883.369 7.482.189c1.6.18 7.14.389 7.483-.189c.078-.132.132-.458-.301-.778c-.483-.356-1.233-.646-1.846-.836c1.637-1.384 2.393-3.302 2.393-4.771c0 0 1.563 2.537 2.103 2.472c.251-.03.581-1.39-.438-4.673"/></svg>' }, link: 'https://qm.qq.com/q/zSaZRWS4eY', ariaLabel: 'QQ' },
			{ icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.813 4.653h.854q2.266.08 3.773 1.574Q23.946 7.72 24 9.987v7.36q-.054 2.266-1.56 3.773c-1.506 1.507-2.262 1.524-3.773 1.56H5.333q-2.266-.054-3.773-1.56C.053 19.614.036 18.858 0 17.347v-7.36q.054-2.267 1.56-3.76t3.773-1.574h.774l-1.174-1.12a1.23 1.23 0 0 1-.373-.906q0-.534.373-.907l.027-.027q.4-.373.92-.373t.92.373L9.653 4.44q.107.106.187.213h4.267a.8.8 0 0 1 .16-.213l2.853-2.747q.4-.373.92-.373c.347 0 .662.151.929.4s.391.551.391.907q0 .532-.373.906zM5.333 7.24q-1.12.027-1.88.773q-.76.748-.786 1.894v7.52q.026 1.146.786 1.893t1.88.773h13.334q1.12-.026 1.88-.773t.786-1.893v-7.52q-.026-1.147-.786-1.894t-1.88-.773zM8 11.107q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q0-.56.386-.947q.387-.386.947-.386m8 0q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q.025-.586.4-.96q.373-.373.933-.373"/></svg>' }, link: 'https://b23.tv/QiGlLcm', ariaLabel: 'Bilibili' }
		],
		search: { provider: 'local' }
	},

	vite: {
		server: { fs: { allow: ['..'] } }
	}
})

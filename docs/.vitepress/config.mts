import { defineConfig } from 'vitepress'

const repo = 'https://github.com/chroma-mediawiki/mediawiki-skins-Chroma'
const docsRepo = 'https://github.com/chroma-mediawiki/chroma-docs'

export default defineConfig({
	lang: 'zh-CN',
	title: 'Chroma',
	titleTemplate: ':title · Chroma',
	description: '色彩驱动、阅读优先的 MediaWiki 皮肤。',

	base: '/chroma-docs/',
	cleanUrls: true,
	lastUpdated: true,

	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/chroma-docs/logo.svg' }],
		['meta', { name: 'theme-color', content: '#006A6A' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:title', content: 'Chroma · MediaWiki skin' }],
		['meta', { property: 'og:description', content: '色彩驱动、阅读优先的 MediaWiki 皮肤。' }],
		['meta', { property: 'og:image', content: 'https://chroma-mediawiki.github.io/chroma-docs/screenshots/content-light.png' }]
	],

	themeConfig: {
		logo: '/logo.svg',
		siteTitle: 'Chroma',

		nav: [
			{ text: '指南', link: '/guide/', activeMatch: '/guide/' },
			{ text: '配置', link: '/guide/configuration' },
			{ text: '开发', link: '/dev/', activeMatch: '/dev/' },
			{ text: '兼容性', link: '/guide/compatibility' },
			{ text: '更新日志', link: '/changelog' }
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

		editLink: {
			pattern: `${docsRepo}/edit/main/docs/:path`,
			text: '在 GitHub 上编辑此页'
		},

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
})

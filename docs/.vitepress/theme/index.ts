import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HomePage from './components/HomePage.vue'
import HomePageEn from './components/HomePageEn.vue'
import './custom.css'

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component('HomePage', HomePage)
		app.component('HomePageEn', HomePageEn)
		if (typeof window !== 'undefined') {
			document.addEventListener('click', (event) => {
				const target = event.target as Element | null
				const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null
				if (!anchor) return
				try {
					const path = new URL(anchor.href, location.href).pathname
					if (path.startsWith('/en/')) localStorage.setItem('chroma-lang', 'en')
					else if (path.startsWith('/')) localStorage.setItem('chroma-lang', 'zh')
				} catch {}
			}, true)
		}
	}
} satisfies Theme

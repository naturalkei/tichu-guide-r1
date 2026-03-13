import { For } from 'solid-js'
import type { ParentComponent } from 'solid-js'
import { useI18n } from 'solid-i18next'
import { Github } from 'lucide-solid'
import BottomNav from './BottomNav'

const Layout: ParentComponent = (props) => {
  const [t, { i18n }] = useI18n() as unknown as [any, any]

  const languages = [
    { code: 'ko', label: '🇰🇷' },
    { code: 'en', label: '🇺🇸' },
    { code: 'ja', label: '🇯🇵' },
    { code: 'zh', label: '🇨🇳' }
  ]

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
  }

  return (
    <div class="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col pb-20">
      <header class="sticky top-0 z-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 h-14 flex items-center justify-between">
        <h1 class="text-lg font-bold tracking-tight">{t('title')}</h1>
        <div class="flex items-center gap-2">
          <For each={languages}>
            {(lang) => (
              <button
                onClick={() => changeLanguage(lang.code)}
                class={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-xl ${
                  i18n.language.startsWith(lang.code) ? 'bg-zinc-100 dark:bg-zinc-800' : ''
                }`}
                title={lang.code}
              >
                {lang.label}
              </button>
            )}
          </For>
        </div>
      </header>
      
      <main class="flex-1 w-full max-w-lg mx-auto p-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
        {props.children}
        
        <footer class="mt-12 mb-8 text-center space-y-4 pt-8 border-t border-zinc-100 dark:border-zinc-800">
          <div class="flex flex-col items-center gap-2">
            <p class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {t('footer_credit')}
            </p>
            <a 
              href="https://github.com/naturalkei/tichu-guide-r1" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Github size={20} />
              <span class="text-sm">GitHub Repository</span>
            </a>
          </div>
          <p class="text-[10px] text-zinc-400">
            © 2026 Tichu Guide R1. Fan-made open source project.
          </p>
        </footer>
      </main>

      <BottomNav />
    </div>
  )
}

export default Layout

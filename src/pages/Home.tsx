import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
import { For } from 'solid-js'
import Layout from '../components/Layout'
import { BookOpen, Calculator, Award, PlayCircle } from 'lucide-solid'
import { useI18n } from '../contexts/I18nContext'

const Home: Component = () => {
  const { t, locale } = useI18n()

  const menuItems = () => [
    { title: t('menu.setup'), desc: t('menu.setup_desc'), icon: PlayCircle, path: `/${locale()}/rules`, color: 'bg-blue-500' },
    { title: t('menu.rules'), desc: t('menu.rules_desc'), icon: BookOpen, path: `/${locale()}/rules`, color: 'bg-emerald-500' },
    { title: t('menu.score'), desc: t('menu.score_desc'), icon: Calculator, path: `/${locale()}/score`, color: 'bg-amber-500' },
    { title: t('menu.tips'), desc: t('menu.tips_desc'), icon: Award, path: `/${locale()}/tips`, color: 'bg-purple-500' },
  ]

  return (
    <Layout>
      <div class="space-y-6">
        <section class="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100 dark:shadow-none overflow-hidden relative">
          <div class="relative z-10">
            <h2 class="text-3xl font-black mb-3 leading-tight">{t('title')}</h2>
            <p class="text-indigo-100 opacity-90 leading-relaxed font-medium">
              {t('subtitle')}
            </p>
          </div>
          <div class="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        </section>

        <section class="grid grid-cols-1 gap-4">
          <For each={menuItems()}>
            {(item) => (
              <A href={item.path} class="group">
                <div class="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm group-hover:shadow-md group-hover:border-indigo-200 dark:group-hover:border-indigo-900 transition-all flex items-center gap-4">
                  <div class={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-100 dark:shadow-none`}>
                    <item.icon size={24} />
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                    <p class="text-zinc-500 dark:text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                  <div class="text-zinc-300 group-hover:text-indigo-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </div>
              </A>
            )}
          </For>
        </section>
      </div>
    </Layout>
  )
}

export default Home

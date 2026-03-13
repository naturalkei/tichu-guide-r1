import { For } from 'solid-js'
import type { Component } from 'solid-js'
import Layout from '../components/Layout'
import { useI18n } from '../contexts/I18nContext'

const Tips: Component = () => {
  const { t, raw } = useI18n()

  const etiquettes = () => (raw('tips.etiquette_items') || []) as { title: string; desc: string }[]
  const dosAndDonts = () => (raw('tips.dos_donts_items') || []) as { type: 'do' | 'dont'; title: string; desc: string }[]

  return (
    <Layout>
      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{t('tips.title')}</h2>

          <div class="bg-purple-600 rounded-2xl p-6 text-white shadow-lg mb-8">
            <h3 class="text-lg font-bold mb-2">{t('tips.hero_title')}</h3>
            <p class="text-purple-100 text-sm leading-relaxed opacity-90">
              {t('tips.hero_desc')}
            </p>
          </div>

          <div class="space-y-4 mb-8">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm">{t('tips.etiquette')}</h3>
            <div class="grid grid-cols-1 gap-3">
              <For each={etiquettes()}>
                {(item) => (
                  <div class="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                    <h4 class="font-bold text-zinc-800 dark:text-zinc-200 text-sm">{item.title}</h4>
                    <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </For>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm">{t('tips.dos_donts')}</h3>
            <div class="space-y-3">
              <For each={dosAndDonts()}>
                {(item) => (
                  <div class={`p-4 rounded-2xl border ${
                    item.type === 'do' 
                      ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30' 
                      : 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30'
                  }`}>
                    <div class="flex items-center gap-2 mb-1">
                      <span class={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                        item.type === 'do' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {item.type}
                      </span>
                      <h4 class={`font-bold text-sm ${item.type === 'do' ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}`}>
                        {item.title}
                      </h4>
                    </div>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </For>
            </div>
          </div>
        </section>

        <section class="mt-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-700 text-center">
          <p class="text-xs text-zinc-500 italic">{t('tips.footer_quote')}</p>
        </section>
      </div>
    </Layout>
  )
}

export default Tips

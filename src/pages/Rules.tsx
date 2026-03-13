import { createSignal, For } from 'solid-js'
import type { Component } from 'solid-js'
import Layout from '../components/Layout'
import { useI18n } from '../contexts/I18nContext'

const Rules: Component = () => {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = createSignal('setup')

  const tabs = () => [
    { id: 'setup', label: t('menu.setup') },
    { id: 'cards', label: t('i18n_cards') || '카드' },
    { id: 'hands', label: t('i18n_hands') || '족보' },
    { id: 'special', label: t('i18n_special') || '특수' },
  ]

  // Note: For full implementation, all content strings below should be added to dict.ts
  // For now, using keys or fallback labels

  return (
    <Layout>
      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{t('menu.rules')}</h2>
          
          <div class="flex p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-6">
            <For each={tabs()}>
              {(tab) => (
                <button
                  onClick={() => setActiveTab(tab.id)}
                  class={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                    activeTab() === tab.id
                      ? 'bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                  }`}
                >
                  {tab.label}
                </button>
              )}
            </For>
          </div>

          <div class="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm min-h-[400px]">
            {activeTab() === 'setup' && (
              <div class="animate-in fade-in duration-300 space-y-4">
                <h3 class="text-lg font-bold text-indigo-600 dark:text-indigo-400">{t('menu.setup')}</h3>
                <ul class="space-y-3">
                  <li class="flex gap-3">
                    <span class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <p class="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">4명의 플레이어가 2명씩 팀을 이룹니다.</p>
                  </li>
                  {/* ... other items should also be translated in dict.ts ... */}
                </ul>
              </div>
            )}
            <p class="text-xs text-zinc-400 mt-8 text-center italic">
              Detailed rules content will be progressively translated.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Rules

import { createSignal, For } from 'solid-js'
import type { Component } from 'solid-js'
import Layout from '../components/Layout'
import { useI18n } from '../contexts/I18nContext'

const Rules: Component = () => {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = createSignal('setup')

  const tabs = () => [
    { id: 'setup', label: t('rules.tabs.setup') },
    { id: 'cards', label: t('rules.tabs.cards') },
    { id: 'hands', label: t('rules.tabs.hands') },
    { id: 'special', label: t('rules.tabs.special') },
  ]

  const handsData = () => [
    { name: t('rules.hands.single'), desc: t('rules.hands.single_desc') },
    { name: t('rules.hands.pair'), desc: t('rules.hands.pair_desc') },
    { name: t('rules.hands.consecutive_pair'), desc: t('rules.hands.consecutive_pair_desc') },
    { name: t('rules.hands.triple'), desc: t('rules.hands.triple_desc') },
    { name: t('rules.hands.full_house'), desc: t('rules.hands.full_house_desc') },
    { name: t('rules.hands.straight'), desc: t('rules.hands.straight_desc') },
  ]

  return (
    <Layout>
      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{t('menu.rules')}</h2>
          
          {/* Tabs */}
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

          {/* Content */}
          <div class="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm min-h-[400px]">
            {activeTab() === 'setup' && (
              <div class="animate-in fade-in duration-300 space-y-4">
                <h3 class="text-lg font-bold text-indigo-600 dark:text-indigo-400">{t('rules.setup.title')}</h3>
                <ul class="space-y-3">
                  <li class="flex gap-3">
                    <span class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <p class="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{t('rules.setup.step1')}</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <p class="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{t('rules.setup.step2')}</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <p class="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{t('rules.setup.step3')}</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <p class="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{t('rules.setup.step4')}</p>
                  </li>
                </ul>
              </div>
            )}

            {activeTab() === 'cards' && (
              <div class="animate-in fade-in duration-300 space-y-4">
                <h3 class="text-lg font-bold text-emerald-600 dark:text-emerald-400">{t('rules.cards.title')}</h3>
                <div class="grid grid-cols-1 gap-3">
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700">
                    <p class="font-bold text-sm">{t('rules.cards.normal')}</p>
                    <p class="text-xs text-zinc-500 mt-1">{t('rules.cards.normal_desc')}</p>
                  </div>
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700">
                    <p class="font-bold text-sm">{t('rules.cards.special')}</p>
                    <p class="text-xs text-zinc-500 mt-1">{t('rules.cards.special_desc')}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab() === 'hands' && (
              <div class="animate-in fade-in duration-300 space-y-4">
                <h3 class="text-lg font-bold text-amber-600 dark:text-amber-400">{t('rules.hands.title')}</h3>
                <div class="space-y-3">
                  <For each={handsData()}>
                    {(hand) => (
                      <div class="flex justify-between items-center p-2 border-b border-zinc-100 dark:border-zinc-800">
                        <span class="font-bold text-sm">{hand.name}</span>
                        <span class="text-xs text-zinc-500">{hand.desc}</span>
                      </div>
                    )}
                  </For>
                  <div class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/30">
                    <p class="font-bold text-sm text-red-600 dark:text-red-400">{t('rules.hands.bomb')}</p>
                    <p class="text-xs text-red-500 mt-1">{t('rules.hands.bomb_desc')}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab() === 'special' && (
              <div class="animate-in fade-in duration-300 space-y-4">
                <h3 class="text-lg font-bold text-purple-600 dark:text-purple-400">{t('rules.special.title')}</h3>
                <div class="space-y-3">
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <p class="font-bold text-sm">{t('rules.special.dragon')}</p>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{t('rules.special.dragon_desc')}</p>
                  </div>
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <p class="font-bold text-sm">{t('rules.special.mahjong')}</p>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{t('rules.special.mahjong_desc')}</p>
                  </div>
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <p class="font-bold text-sm">{t('rules.special.phoenix')}</p>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{t('rules.special.phoenix_desc')}</p>
                  </div>
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <p class="font-bold text-sm">{t('rules.special.dog')}</p>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{t('rules.special.dog_desc')}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Rules

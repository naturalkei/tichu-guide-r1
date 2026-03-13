import { For, createSignal } from 'solid-js'
import type { Component } from 'solid-js'

import Layout from '../components/Layout'
import { useI18n } from '../contexts/I18nContext'

const Score: Component = () => {
  const { t } = useI18n()
  const [teamAScore, setTeamAScore] = createSignal(0)
  const [teamBScore, setTeamBScore] = createSignal(0)

  const cardScores = () => [
    { card: '5', points: '+5' },
    { card: '10', points: '+10' },
    { card: 'K', points: '+10' },
    { card: t('rules.special.dragon'), points: '+25' },
    { card: t('rules.special.phoenix'), points: '-25' },
  ]

  return (
    <Layout>
      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">{t('score.title')}</h2>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-900/30 mb-6">
            <h3 class="font-bold text-indigo-700 dark:text-indigo-400 mb-3 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              {t('score.info_title')}
            </h3>
            <p class="text-xs text-indigo-600 dark:text-indigo-300 leading-relaxed">
              {t('score.info_desc')}
            </p>
          </div>

          <div class="grid grid-cols-1 gap-4 mb-8">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm">{t('score.card_points')}</h3>
            <div class="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 divide-y divide-zinc-50 dark:divide-zinc-800">
              <For each={cardScores()}>
                {(item) => (
                  <div class="flex justify-between items-center p-4">
                    <span class="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.card}</span>
                    <span class={`text-sm font-bold ${item.points.includes('-') ? 'text-red-500' : 'text-indigo-600 dark:text-indigo-400'}`}>
                      {item.points}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm">{t('score.special_bonus')}</h3>
            <div class="grid grid-cols-1 gap-3">
              <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                <p class="font-bold text-emerald-700 dark:text-emerald-400 text-sm">{t('score.one_two')}</p>
                <p class="text-xs text-emerald-600 dark:text-emerald-300 mt-1">{t('score.one_two_desc')}</p>
              </div>
              <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                <p class="font-bold text-amber-700 dark:text-amber-400 text-sm">{t('score.tichu_bonus')}</p>
                <p class="text-xs text-amber-600 dark:text-amber-300 mt-1">{t('score.tichu_bonus_desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-8 p-6 bg-zinc-900 dark:bg-zinc-800 rounded-3xl text-white">
          <h3 class="font-bold mb-4 text-center">{t('score.calculator')}</h3>
          <div class="flex gap-4 items-center justify-between">
            <div class="flex-1 text-center">
              <p class="text-[10px] text-zinc-400 mb-1 uppercase tracking-wider">{t('score.team_a')}</p>
              <input 
                type="number" 
                value={teamAScore()} 
                onInput={(e) => setTeamAScore(parseInt(e.currentTarget.value) || 0)}
                class="w-full bg-zinc-800 dark:bg-zinc-700 border-none rounded-xl text-center text-xl font-bold py-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div class="text-zinc-600 font-black text-2xl">:</div>
            <div class="flex-1 text-center">
              <p class="text-[10px] text-zinc-400 mb-1 uppercase tracking-wider">{t('score.team_b')}</p>
              <input 
                type="number" 
                value={teamBScore()} 
                onInput={(e) => setTeamBScore(parseInt(e.currentTarget.value) || 0)}
                class="w-full bg-zinc-800 dark:bg-zinc-700 border-none rounded-xl text-center text-xl font-bold py-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <p class="text-center text-[10px] text-zinc-500 mt-4">{t('score.calc_note')}</p>
        </section>
      </div>
    </Layout>
  )
}

export default Score

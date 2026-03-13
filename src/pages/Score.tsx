import { createSignal, For } from 'solid-js';
import type { Component } from 'solid-js';
import Layout from '../components/Layout';

const Score: Component = () => {
  const [teamAScore, setTeamAScore] = createSignal(0);
  const [teamBScore, setTeamBScore] = createSignal(0);

  const cardScores = [
    { card: '5', points: '+5점' },
    { card: '10', points: '+10점' },
    { card: 'K', points: '+10점' },
    { card: '용 (Dragon)', points: '+25점' },
    { card: '봉 (Mah Jong)', points: '-25점' },
  ];

  return (
    <Layout>
      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">점수 계산</h2>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-900/30 mb-6">
            <h3 class="font-bold text-indigo-700 dark:text-indigo-400 mb-3 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              점수 계산의 기초
            </h3>
            <p class="text-xs text-indigo-600 dark:text-indigo-300 leading-relaxed">
              게임이 끝나면 획득한 카드들의 점수를 합산합니다. <br />
              전체 카드의 점수 총합은 항상 **100점**입니다.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-4 mb-8">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm">카드별 점수</h3>
            <div class="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 divide-y divide-zinc-50 dark:divide-zinc-800">
              <For each={cardScores}>
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
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm">특수 상황 보너스</h3>
            <div class="grid grid-cols-1 gap-3">
              <div class="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                <p class="font-bold text-emerald-700 dark:text-emerald-400 text-sm">원투 (1-2위 승리)</p>
                <p class="text-xs text-emerald-600 dark:text-emerald-300 mt-1">같은 팀이 1위와 2위를 모두 차지하면 점수 합산 없이 즉시 **200점** 획득.</p>
              </div>
              <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                <p class="font-bold text-amber-700 dark:text-amber-400 text-sm">스몰 티츄 / 그랜드 티츄</p>
                <p class="text-xs text-amber-600 dark:text-amber-300 mt-1">성공 시 각각 **+100점 / +200점**, 실패 시 동일한 점수 감점.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Calculator Placeholder */}
        <section class="mt-8 p-6 bg-zinc-900 dark:bg-zinc-800 rounded-3xl text-white">
          <h3 class="font-bold mb-4 text-center">퀵 점수 계산기</h3>
          <div class="flex gap-4 items-center justify-between">
            <div class="flex-1 text-center">
              <p class="text-[10px] text-zinc-400 mb-1 uppercase tracking-wider">우리 팀</p>
              <input 
                type="number" 
                value={teamAScore()} 
                onInput={(e) => setTeamAScore(parseInt(e.currentTarget.value) || 0)}
                class="w-full bg-zinc-800 dark:bg-zinc-700 border-none rounded-xl text-center text-xl font-bold py-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div class="text-zinc-600 font-black text-2xl">:</div>
            <div class="flex-1 text-center">
              <p class="text-[10px] text-zinc-400 mb-1 uppercase tracking-wider">상대 팀</p>
              <input 
                type="number" 
                value={teamBScore()} 
                onInput={(e) => setTeamBScore(parseInt(e.currentTarget.value) || 0)}
                class="w-full bg-zinc-800 dark:bg-zinc-700 border-none rounded-xl text-center text-xl font-bold py-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <p class="text-center text-[10px] text-zinc-500 mt-4">라운드별 합산 점수를 기록하세요.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Score;

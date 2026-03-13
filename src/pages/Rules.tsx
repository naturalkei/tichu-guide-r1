import { createSignal, For } from 'solid-js';
import type { Component } from 'solid-js';
import Layout from '../components/Layout';

const Rules: Component = () => {
  const [activeTab, setActiveTab] = createSignal('setup');

  const tabs = [
    { id: 'setup', label: '준비' },
    { id: 'cards', label: '카드' },
    { id: 'hands', label: '족보' },
    { id: 'special', label: '특수' },
  ];

  return (
    <Layout>
      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">게임 규칙</h2>
          
          {/* Tabs */}
          <div class="flex p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-6">
            <For each={tabs}>
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
                <h3 class="text-lg font-bold text-indigo-600 dark:text-indigo-400">게임 준비</h3>
                <ul class="space-y-3">
                  <li class="flex gap-3">
                    <span class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <p class="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">4명의 플레이어가 2명씩 팀을 이룹니다. (같은 팀끼리 마주 보고 앉습니다)</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <p class="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">총 56장의 카드를 1장씩 돌아가며 모두 나눠 갖습니다. (각자 14장)</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <p class="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">라지 티츄 선언: 카드를 8장 받았을 때 선언할 수 있습니다.</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <p class="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">카드 교환: 팀원에게 1장, 상대 팀 2명에게 각 1장씩 총 3장을 동시에 교환합니다.</p>
                  </li>
                </ul>
              </div>
            )}

            {activeTab() === 'cards' && (
              <div class="animate-in fade-in duration-300 space-y-4">
                <h3 class="text-lg font-bold text-emerald-600 dark:text-emerald-400">카드 구성</h3>
                <div class="grid grid-cols-1 gap-3">
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700">
                    <p class="font-bold text-sm">일반 카드 (52장)</p>
                    <p class="text-xs text-zinc-500 mt-1">4가지 문양, 각 2~A까지 13장</p>
                  </div>
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700">
                    <p class="font-bold text-sm">특수 카드 (4장)</p>
                    <p class="text-xs text-zinc-500 mt-1">참새(1), 봉(Mah Jong), 개(Dog), 용(Dragon)</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab() === 'hands' && (
              <div class="animate-in fade-in duration-300 space-y-4">
                <h3 class="text-lg font-bold text-amber-600 dark:text-amber-400">족보 (조합)</h3>
                <div class="space-y-3">
                  {[
                    { name: '싱글', desc: '카드 1장' },
                    { name: '페어', desc: '숫자가 같은 카드 2장' },
                    { name: '연속 페어', desc: '숫자가 이어지는 2개 이상의 페어' },
                    { name: '트리플', desc: '숫자가 같은 카드 3장' },
                    { name: '풀하우스', desc: '트리플 + 페어' },
                    { name: '스트레이트', desc: '5장 이상의 연속된 숫자' },
                  ].map((hand) => (
                    <div class="flex justify-between items-center p-2 border-b border-zinc-100 dark:border-zinc-800">
                      <span class="font-bold text-sm">{hand.name}</span>
                      <span class="text-xs text-zinc-500">{hand.desc}</span>
                    </div>
                  ))}
                  <div class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/30">
                    <p class="font-bold text-sm text-red-600 dark:text-red-400">폭탄 (Bomb)</p>
                    <p class="text-xs text-red-500 mt-1">포카(숫자 4장) 또는 스트레이트 플러시(5장 이상). 언제든 난입 가능!</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab() === 'special' && (
              <div class="animate-in fade-in duration-300 space-y-4">
                <h3 class="text-lg font-bold text-purple-600 dark:text-purple-400">특수 카드 상세</h3>
                <div class="space-y-3">
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <p class="font-bold text-sm">용 (Dragon)</p>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">최강의 싱글 카드. 승리 시 딴 카드를 상대에게 주어야 함.</p>
                  </div>
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <p class="font-bold text-sm">봉 (Mah Jong)</p>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">숫자 1로 간주. 시작 플레이어가 됨. 특정 숫자 호출 가능.</p>
                  </div>
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <p class="font-bold text-sm">참새 (Phoenix)</p>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">조커 카드. 어떤 숫자로도 변신 가능. (폭탄 제외)</p>
                  </div>
                  <div class="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <p class="font-bold text-sm">개 (Dog)</p>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">자신의 턴에 내면 팀원에게 턴을 넘김.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Rules;

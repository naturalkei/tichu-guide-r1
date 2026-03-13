import { For } from 'solid-js';
import type { Component } from 'solid-js';
import Layout from '../components/Layout';

const Tips: Component = () => {
  const etiquettes = [
    { title: '카드 교환 매너', desc: '모든 플레이어가 카드를 엎어놓을 때까지 기다린 후 동시에 확인합니다.' },
    { title: '불필요한 딜레이 방지', desc: '자신의 차례가 오기 전에 미리 낼 카드를 생각하여 원활한 진행을 돕습니다.' },
    { title: '팀원과의 소통', desc: '게임 중 직접적인 대화로 정보를 공유하는 것은 금지되어 있습니다.' },
  ];

  const dosAndDonts = [
    { type: 'do', title: '팀원의 티츄 응원하기', desc: '팀원이 티츄를 불렀다면, 자신이 1등을 하기보다 팀원의 1등을 돕는 플레이를 하세요.' },
    { type: 'dont', title: '늦은 티츄 선언', desc: '이미 카드가 나간 뒤에 티츄를 선언하는 것은 에티켓에 어긋납니다.' },
  ];

  return (
    <Layout>
      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">매너 및 팁</h2>

          <div class="bg-purple-600 rounded-2xl p-6 text-white shadow-lg mb-8">
            <h3 class="text-lg font-bold mb-2">티츄는 신사적인 게임입니다</h3>
            <p class="text-purple-100 text-sm leading-relaxed opacity-90">
              함께 즐기는 플레이어들을 배려할 때 더욱 즐거운 게임이 됩니다.
            </p>
          </div>

          <div class="space-y-4 mb-8">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm">진행 에티켓</h3>
            <div class="grid grid-cols-1 gap-3">
              <For each={etiquettes}>
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
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Do's & Don'ts</h3>
            <div class="space-y-3">
              <For each={dosAndDonts}>
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
          <p class="text-xs text-zinc-500 italic">"승패보다 중요한 것은 즐거운 게임을 만드는 태도입니다."</p>
        </section>
      </div>
    </Layout>
  );
};

export default Tips;

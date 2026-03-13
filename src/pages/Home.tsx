import type { Component } from 'solid-js';
import { A } from "@solidjs/router";
import { For } from 'solid-js';
import Layout from '../components/Layout';
import { BookOpen, Calculator, Award, PlayCircle } from 'lucide-react';

const Home: Component = () => {
  const menuItems = [
    { title: '게임 준비', desc: '카드 구성 및 분배', icon: PlayCircle, path: '/rules', color: 'bg-blue-500' },
    { title: '상세 규칙', desc: '족보 및 진행 방식', icon: BookOpen, path: '/rules', color: 'bg-emerald-500' },
    { title: '점수 계산', desc: '계산기 및 보너스', icon: Calculator, path: '/score', color: 'bg-amber-500' },
    { title: '매너 팁', desc: '에티켓 가이드', icon: Award, path: '/tips', color: 'bg-purple-500' },
  ];

  return (
    <Layout>
      <div class="space-y-6">
        <section class="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100 dark:shadow-none overflow-hidden relative">
          <div class="relative z-10">
            <h2 class="text-3xl font-black mb-3 leading-tight">티츄 가이드 R1</h2>
            <p class="text-indigo-100 opacity-90 leading-relaxed font-medium">
              광고 없이 깔끔하게 확인하는 <br />
              티츄 보드게임의 모든 규칙과 팁
            </p>
          </div>
          <div class="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        </section>

        <section class="grid grid-cols-1 gap-4">
          <For each={menuItems}>
            {(item) => (
              <A href={item.path} class="group">
                <div class="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm group-hover:shadow-md group-hover:border-indigo-200 dark:group-hover:border-indigo-900 transition-all flex items-center gap-4">
                  <div class={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-${item.color.split('-')[1]}-100 dark:shadow-none`}>
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

        <footer class="text-center py-8">
          <p class="text-xs text-zinc-400 font-medium">© 2026 Tichu Guide R1. 팬 제작 오픈소스 프로젝트</p>
          <div class="flex justify-center gap-4 mt-2">
            <a href="https://github.com/naturalkei/tichu-guide-r1" class="text-xs text-indigo-500 hover:underline">GitHub</a>
            <span class="text-zinc-300">|</span>
            <span class="text-xs text-zinc-400">MIT License</span>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;

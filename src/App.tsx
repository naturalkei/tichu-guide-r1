import type { Component } from 'solid-js';
import Layout from './components/Layout';

const App: Component = () => {
  return (
    <Layout>
      <div class="space-y-6">
        <section class="bg-indigo-600 rounded-2xl p-6 text-white shadow-xl shadow-indigo-200 dark:shadow-none">
          <h2 class="text-2xl font-bold mb-2">티츄 가이드 R1</h2>
          <p class="text-indigo-100 opacity-90 leading-relaxed">
            광고 없이 깔끔하게 확인하는 <br />
            티츄 보드게임의 모든 규칙
          </p>
        </section>

        <section class="grid grid-cols-2 gap-4">
          <div class="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100">게임 준비</h3>
            <p class="text-sm text-zinc-500 mt-1">카드 구성 및 분배</p>
          </div>
          <div class="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100">상세 규칙</h3>
            <p class="text-sm text-zinc-500 mt-1">족보 및 진행 방식</p>
          </div>
          <div class="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100">점수 계산</h3>
            <p class="text-sm text-zinc-500 mt-1">계산기 및 보너스</p>
          </div>
          <div class="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100">매너 팁</h3>
            <p class="text-sm text-zinc-500 mt-1">에티켓 가이드</p>
          </div>
        </section>

        <footer class="text-center text-xs text-zinc-400 mt-8 pb-4">
          <p>© 2026 Tichu Guide R1. 팬 제작 오픈소스 프로젝트</p>
        </footer>
      </div>
    </Layout>
  );
};

export default App;

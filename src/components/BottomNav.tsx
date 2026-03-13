import { A } from "@solidjs/router";
import { For } from 'solid-js';
import type { Component } from 'solid-js';
import { Home, BookOpen, Calculator, Award } from 'lucide-react';

const BottomNav: Component = () => {
  const navItems = [
    { label: '홈', icon: Home, path: '/' },
    { label: '규칙', icon: BookOpen, path: '/rules' },
    { label: '점수', icon: Calculator, path: '/score' },
    { label: '팁', icon: Award, path: '/tips' },
  ];

  return (
    <nav class="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 pb-safe shadow-lg">
      <div class="flex justify-around items-center h-16">
        <For each={navItems}>
          {(item) => (
            <A 
              href={item.path} 
              activeClass="text-indigo-600 dark:text-indigo-400" 
              inactiveClass="text-zinc-500 dark:text-zinc-400"
              end={true}
              class="flex flex-col items-center justify-center w-full h-full hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <item.icon size={24} />
              <span class="text-xs mt-1 font-medium">{item.label}</span>
            </A>
          )}
        </For>
      </div>
    </nav>
  );
};

export default BottomNav;

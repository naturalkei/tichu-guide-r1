import type { ParentComponent } from 'solid-js';
import BottomNav from './BottomNav';

const Layout: ParentComponent = (props) => {
  return (
    <div class="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col pb-20">
      <header class="sticky top-0 z-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 h-14 flex items-center justify-between">
        <h1 class="text-lg font-bold tracking-tight">티츄 가이드 R1</h1>
        <div class="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
      </header>
      
      <main class="flex-1 w-full max-w-lg mx-auto p-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
        {props.children}
      </main>

      <BottomNav />
    </div>
  );
};

export default Layout;

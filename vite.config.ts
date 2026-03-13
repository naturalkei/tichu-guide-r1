import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    solid(),
    tailwindcss(),
  ],
  base: mode === 'production' ? '/tichu-guide-r1/' : '/',
}))

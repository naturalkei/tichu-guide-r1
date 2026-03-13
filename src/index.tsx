/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')

if (!root) {
  console.error('Root element not found')
} else {
  console.log('Mounting Solid JS application...')
  render(() => <App />, root)
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: '/Users/wuxingyu/react_work/MiniAPP/ssl/127.0.0.1-key.pem',
      cert: '/Users/wuxingyu/react_work/MiniAPP/ssl/127.0.0.1.pem'
    }
  }
})

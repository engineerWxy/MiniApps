import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: '../ssl/127.0.0.1-key.pem',
      cert: '../ssl/127.0.0.1.pem'
    }
  }
})

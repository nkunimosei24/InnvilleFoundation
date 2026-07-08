import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
extend:{
  colors: {
    innviileRed: "#E10600",
        innviileDarkRed: "#B30500",
  }
}
  },
  plugins: [react(), tailwindcss()],

})

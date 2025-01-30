import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  optimizeDeps: {
    include: ["slick-carousel/slick/slick.css", "slick-carousel/slick/slick-theme.css", '@turf/turf', "@mui/lab/Timeline", "aos", "aos/dist/aos.css"]
  },
})

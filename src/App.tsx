import { Outlet } from 'react-router-dom'

import { ThemeProvider } from './theme/provider'
import Navbar from './components/shared/navbar'
import Footer from './components/shared/footer'
import BottomMenu from './components/shared/bottom-menu';

import './styles/global.css';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen font-lexendDeca">
        <Navbar />
        <main className="">
          <Outlet />
        </main>
        <BottomMenu />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
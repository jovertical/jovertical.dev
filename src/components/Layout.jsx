import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/contexts/themeContext'

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-primary dark:bg-primary-dark">
        <Header />

        <main className="max-w-7xl mx-auto mt-4 md:mt-6 lg:mt-10 px-5 md:px-20 pb-64 md:pb-72 lg:pb-84">
          {children}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

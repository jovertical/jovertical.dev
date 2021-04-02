import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/contexts/themeContext';

export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <div className="relative min-h-screen bg-primary dark:bg-primary-dark">
                <Header />

                <main className="container max-w-7xl m-auto mt-16 px-5 sm:px-12 md:px-24 lg:px-32 pb-64 md:pb-72 lg:pb-84">
                    {children}
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
}

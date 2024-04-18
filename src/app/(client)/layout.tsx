import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './styles/main.scss'
import Header from './_components/header'
import Footer from './_components/footer'

export const metadata = {
    title: 'IELTS',
    description: 'IELTS Study Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <Header />
                {children}
                <Footer />
                <div id="alert" className="z-50 fixed top-[20%] right-0 pointer-events-none"></div>
            </body>
        </html>
    )
}

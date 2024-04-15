import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './(styles)/main.scss'
// import '@fortawesome/fontawesome-free/js/all.min.js'
import Header from './_components/header'
import Footer from './_components/footer'

export const metadata = {
    title: 'IELTS',
    description: 'IELTS Study Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

import '@client/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@client/styles/main.scss'

export const metadata = {
    title: 'IELTS',
    description: 'IELTS Study Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-100">{children}</body>
        </html>
    )
}

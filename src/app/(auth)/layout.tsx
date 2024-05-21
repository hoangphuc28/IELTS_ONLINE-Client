import '@client/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@client/styles/main.scss'
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}

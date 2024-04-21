import '@client/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@client/styles/main.scss'

export const metadata = {
    title: 'IELTS',
    description: 'IELTS Study Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <div id="alert" className="z-50 fixed top-[20%] right-0 pointer-events-none"></div>
        </>
    )
}

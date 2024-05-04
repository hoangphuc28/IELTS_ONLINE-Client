import '@admin/styles/globals.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import Nav from './components/nav/nav'
import '@admin/styles/base/_reset.scss'
import '@admin/styles/base/_layout.scss'
import Provider from './providers/examProvider'
export const metadata = {
    title: 'Admin',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="layout">
                    <div className="layout-cover">
                        <Nav />
                        <div className="page-contain">
                            <Provider>{children}</Provider>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

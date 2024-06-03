import Nav from './components/nav/nav'
import '@admin/styles/globals.css'
import '@admin/styles/base/_reset.scss'
import '@admin/styles/base/_layout.scss'
import ExamProvider from './providers/examProvider'
import '@admin/styles/components/_loader.scss'
import ReduxProvider from './providers/reduxProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <div className="layout">
                <div className="layout-cover">
                    <Nav />
                    <div className="page-contain">
                        <ExamProvider>{children}</ExamProvider>
                    </div>
                </div>
            </div>
        </ReduxProvider>
        // <html lang="en">
        //     <body>
        //     </body>
        // </html>
    )
}

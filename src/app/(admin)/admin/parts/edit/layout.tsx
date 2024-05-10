import Nav from '@admin/admin/components/nav/nav'
import '@admin/styles/base/_reset.scss'
import '@admin/styles/base/_layout.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Provider from '@admin/admin/providers/questionProvider'
export const metadata = {
    title: 'Admin',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    
    return (
        <section className="layout">
            <section className="layout-cover">
                <Nav />
                <main className="page-contain">
                    <Provider>{children}</Provider>
                </main>
            </section>
        </section>
    )
}

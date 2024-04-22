import '@clientExamLibrary/[id]/[skill]/styles/examLibraryTest.scss'
import ComponentTestHeader from './_components/header'

export const metadata = {
    title: 'IELTS',
    description: 'IELTS Study Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <article className="exam-library-test flex flex-col gap-3">
                <ComponentTestHeader />
                {children}
                <div id="alert" className="z-50 fixed top-[20%] right-0 pointer-events-none"></div>
            </article>
        </>
    )
}

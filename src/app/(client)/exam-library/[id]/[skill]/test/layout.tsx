import '@clientExamLibrary/[id]/[skill]/styles/examLibraryTest.scss'

export const metadata = {
    title: 'IELTS',
    description: 'IELTS Study Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <article className="exam-library-test flex flex-col gap-3">
                {children}
                <div id="alert" className="z-50 fixed top-[20%] right-0 pointer-events-none"></div>
            </article>
        </>
    )
}

'use client'
import IMiniTest from '@clientExamLibrary/interfaces/IMiniTest'
import ComponentListTap from './tab/listTap'

export default function ComponentTestFooter({ data }: { data: IMiniTest }) {
    return (
        <>
            <footer className="fixed bottom-[2px] h-[70px] left-0 right-0 border-t bg-white">
                <ComponentListTap data={data} />
            </footer>
        </>
    )
}

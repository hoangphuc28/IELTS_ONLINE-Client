'use client'
import IMiniTest from '../../../../interfaces/IMiniTest'
import ComponentListTap from './tab/listTap'

export default function ComponentTestFooter({ data }: { data: IMiniTest }) {
    return (
        <>
            <footer className="fixed bottom-0 h-[60px] left-0 right-0 border-t bg-white">
                <ComponentListTap data={data} />
            </footer>
        </>
    )
}

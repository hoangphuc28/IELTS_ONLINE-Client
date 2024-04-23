import { useRef } from 'react'
import CategoriesPanel from '../../components/categoriesPanel/categoriesPanel'
import Resizer from '../../components/resizer'
import "@admin/styles/components/_selectParts.scss"
import Portlet from '../../components/categoriesPanel/portlet'
interface Category {
    id: String
    title: String
}
export default function ChosePart() {
    const examLeft = useRef<HTMLDivElement>(null)

    let categories: Category[] = [
        { id: '1', title: 'All categories' },
        { id: '2', title: 'Default categories' },
    ]

    return (
        <div className='selectPart'>
            <div className="container">
                <div ref={examLeft} className="left">
                    <Portlet categories={categories}/>
                </div>
                <div className="middle">
                    <Resizer max={800} forwardedRef={examLeft} />
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

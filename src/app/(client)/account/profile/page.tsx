import LayoutCenter from '../../_components/layoutCenter'
import SideBar, { targets } from '../_components/sideBar'
import ComponentOverallAssessment from '../dashboard/_components/overallAssessment'

export default function Page() {
    return (
        <>
            <section>
                <section>
                    <h2>Hồ Sơ</h2>

                    <section className="bg-white px-2 py-3 text-lg flex flex-col gap-y-3">
                        <p>
                            <span>Tên: </span> <span>Hehe</span>
                        </p>
                        <p>
                            <span>Mail: </span> <span>Hehe@gmail.com</span>
                        </p>
                    </section>
                </section>
                <ComponentOverallAssessment />
            </section>
        </>
    )
}

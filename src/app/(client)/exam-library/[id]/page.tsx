import LayoutCenter from '../../_components/layoutCenter'
import ITest from '../interfaces/ITest'

export default function Page() {
    const test: ITest = {
        code: 'abc',
        name: 'IELTS Mock Test 2023 December',
        description: '',
        src: '',
        createdAt: new Date().toLocaleString(),
        details: [],
        password: '',
        status: '',
        time: '',
        title: '',
        updatedAt: new Date().toLocaleString(),
    }
    return (
        <>
            <main className="min-h-[50vh] my-5 py-5">
                <LayoutCenter>
                    <section className="flex gap-x-5">
                        <div
                            className="w-48 h-52 rounded-lg bg-img-center"
                            style={{
                                background: 'url(../../../../assets/img/src-test-default.jpg)',
                            }}
                        ></div>
                        <div className="">
                            <h2 className="w-full font-bold text-2xl text-violet-800">
                                {test.name}
                            </h2>
                            <p className="text-stone-400">
                                <i className="fa-regular fa-calendar"></i>{' '}
                                <span>Đăng ngày: {test.updatedAt}</span>
                            </p>
                        </div>
                    </section>
                    <section></section>
                </LayoutCenter>
            </main>
        </>
    )
}

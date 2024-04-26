import IMiniTest from '../../../../interfaces/IMiniTest'
import ComponentSubmit from './submit'

export default function ComponentTestHeader({ data }: { data: IMiniTest }) {
    const time = {
        h: 3,
        m: 12,
        s: 0,
    }
    return (
        <>
            <header className="bg-white px-5 h-12">
                <section className="relative flex justify-between">
                    <section className="logo mobile w-12 h-12">
                        <img
                            alt=""
                            className="w-100 w-full"
                            src={process.env.NEXT_PUBLIC_APP_LOGO}
                        />
                    </section>
                    <section className="-ms-20 flex gap-2 items-center font-bold text-violet-800">
                        <i className="fa-regular fa-clock text-2xl"></i>
                        <p className="text-xl">
                            {time.h}:{time.m}:{time.s}
                        </p>
                    </section>
                    <section>{data.name === 'Listening' && <ComponentSubmit target="" />}</section>
                </section>
                {data.name === 'Listening' && <ListeningHeader data={data.src || ''} />}
            </header>
        </>
    )
}

function ListeningHeader({ data }: { data: string }) {
    return (
        <>
            <section>
                <audio
                    className="w-full"
                    src="../../../../../../../assets/media/test-media.m4a"
                    controls
                ></audio>
            </section>
        </>
    )
}

import ITest from '@clientExamLibrary/interfaces/ITest'

export default function ComponentCardInfo({ data }: { data: ITest }) {
    return (
        <>
            <section className="flex flex-col items-center sm:items-start sm:flex-row gap-5 bg-white px-5 py-4 rounded-lg shadow-lg">
                <div
                    className="w-48 h-48 rounded-lg bg-img-center"
                    style={{
                        background: `url(${data.src}), url(../../../../assets/img/src-test-default.jpg)`,
                    }}
                ></div>
                <div className="">
                    <h2 className="w-full font-bold text-2xl text-violet-800">{data.name}</h2>
                    <p className="text-stone-400">
                        <i className="fa-regular fa-calendar me-1"></i>{' '}
                        <span>{data.updatedAt}</span>
                    </p>
                    <p className="text-stone-400">{data.title}</p>
                    <p className="text-stone-400">{data.description}</p>
                </div>
            </section>
        </>
    )
}

import LayoutCenter from '@client/_components/layoutCenter'
import IMiniTest from '@clientExamLibrary/interfaces/IMiniTest'
import ITest from '@clientExamLibrary/interfaces/ITest'
import ComponentCardInfo from '@clientExamLibrary/[id]/_components/cardInfo'
import ComponentCardTestItem from '@clientExamLibrary/[id]/_components/cardTestItem'

export default function Page() {
    const miniTest: Array<IMiniTest> = [
        {
            name: 'Listening',
            parts: [
                {
                    src: '../../../../assets/img/src-test-default.jpg',
                    time: '00:30:00',
                    description: "India's Modern Women",
                    groups: [
                        {
                            title: 'Do the following statements agree with the information given in Reading Passage 1?',
                            description: 'In boxes 9 - 13 on your answer sheet, write.',
                            type: 'drag-drop',
                            questions: [
                                {
                                    src: '',
                                    content:
                                        '9. The effect of American culture on young Indian women was not forecast when satellite and cable TV arrived in India.',
                                    answers: [
                                        {
                                            content: 'T',
                                        },
                                        {
                                            content: 'F',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    createdAt: new Date().toLocaleString(),
                    updatedAt: new Date().toLocaleString(),
                },
            ],
            time: '',
        },
        {
            name: 'Reading',
            parts: [
                {
                    src: '../../../../assets/img/src-test-default.jpg',
                    time: '00:30:00',
                    description: "India's Modern Women",
                    groups: [
                        {
                            title: 'Do the following statements agree with the information given in Reading Passage 1?',
                            description: 'In boxes 9 - 13 on your answer sheet, write.',
                            type: 'drag-drop',
                            questions: [
                                {
                                    src: '',
                                    content:
                                        '9. The effect of American culture on young Indian women was not forecast when satellite and cable TV arrived in India.',
                                    answers: [
                                        {
                                            content: 'T',
                                        },
                                        {
                                            content: 'F',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    createdAt: new Date().toLocaleString(),
                    updatedAt: new Date().toLocaleString(),
                },
            ],
            time: '',
        },
        {
            name: 'Writing',
            parts: [
                {
                    src: '../../../../assets/img/src-test-default.jpg',
                    time: '00:30:00',
                    description: "India's Modern Women",
                    groups: [
                        {
                            title: 'Do the following statements agree with the information given in Reading Passage 1?',
                            description: 'In boxes 9 - 13 on your answer sheet, write.',
                            type: 'drag-drop',
                            questions: [
                                {
                                    src: '',
                                    content:
                                        '9. The effect of American culture on young Indian women was not forecast when satellite and cable TV arrived in India.',
                                    answers: [
                                        {
                                            content: 'T',
                                        },
                                        {
                                            content: 'F',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    createdAt: new Date().toLocaleString(),
                    updatedAt: new Date().toLocaleString(),
                },
            ],
            time: '',
        },
        {
            name: 'Speaking',
            parts: [
                {
                    src: '../../../../assets/img/src-test-default.jpg',
                    time: '00:30:00',
                    description: "India's Modern Women",
                    groups: [
                        {
                            title: 'Do the following statements agree with the information given in Reading Passage 1?',
                            description: 'In boxes 9 - 13 on your answer sheet, write.',
                            type: 'drag-drop',
                            questions: [
                                {
                                    src: '',
                                    content:
                                        '9. The effect of American culture on young Indian women was not forecast when satellite and cable TV arrived in India.',
                                    answers: [
                                        {
                                            content: 'T',
                                        },
                                        {
                                            content: 'F',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    createdAt: new Date().toLocaleString(),
                    updatedAt: new Date().toLocaleString(),
                },
            ],
            time: '',
        },
    ]
    const test: ITest = {
        code: 'haha',
        name: 'IELTS Mock Test 2023 December',
        title: 'Bài này để làm mẫu',
        description: 'Bài này để làm mẫu, gió thoang thoảng, âm vang lăn tăn, tí tắt tí tắt...',
        src: '',
        createdAt: new Date().toLocaleString(),
        details: [...miniTest],
        hasPassword: false,
        status: '',
        time: '03:00:00',
        updatedAt: new Date().toLocaleString(),
    }
    const colors = ['#31aabe', '#317343', '#eea055', '#c06073']
    const examProgresses = [
        [
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
        ],
        [
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
        ],
        [{ quesId: 'abc', value: '' }],
        [{ quesId: 'abc', value: '' }],
    ]
    const fullProgress = Math.floor(
        (examProgresses.reduce((acc, item) => {
            acc += item.length
            return acc
        }, 0) /
            (40 + 40 + 3 + 2)) *
            100,
    )
    const maxExams: Array<number> = [40, 40, 3, 2]
    return (
        <>
            <main className="min-h-[50vh] mb-5 sm:mt-5 sm:py-5">
                <LayoutCenter>
                    <section>
                        <ComponentCardInfo data={test} />
                    </section>
                    <section className="mt-3 pb-3 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <section className="grid grid-cols-2 md:grid-cols-4 gap-5 px-5 py-3">
                            {test.details.map((miniTest, index) => (
                                <section
                                    key={`test-card-item-${index}`}
                                    className="border rounded px-4 py-2"
                                >
                                    <ComponentCardTestItem
                                        index={index}
                                        color={colors[index]}
                                        testId={test.code}
                                        data={miniTest}
                                        examProgress={examProgresses[index] as any[]}
                                        maxExam={maxExams[index]}
                                    />
                                </section>
                            ))}
                        </section>
                        <section className="w-3/4 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <div className="flex items-center text-indigo-900">
                                <i className="fa-solid fa-battery-full text-4xl"></i>
                                <span className="ms-3 text-xl font-bold">Full Test</span>
                            </div>
                            <div className="w-full sm:w-auto h-[25px] grow relative bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-purple-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: `${fullProgress}%` }}
                                ></div>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-purple-700 font-bold">
                                    <span>{fullProgress}</span>%
                                </div>
                            </div>

                            {/* <div>
                                <Link
                                    href={`/${test.code}/all/test`}
                                    className="block text-white px-3 py-2 rounded-3xl bg-violet-800 font-bold"
                                >
                                    <i className="fa-solid fa-bolt"></i> Làm bài
                                </Link>
                            </div> */}
                        </section>
                    </section>
                </LayoutCenter>
            </main>
        </>
    )
}

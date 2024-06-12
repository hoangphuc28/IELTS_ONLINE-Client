'use client'
import ComponentListUserAnswer from './_component/list-user-answer'
import Charts from './charts'
import QuicActions from './quickActions'
import '@admin/styles/components/_cover.scss'
import '@admin/styles/pages/dashboard.scss'

export default function Page() {
    return (
        <div className="dashboard">
            <section className="flex flex-col gap-3">
                <QuicActions />
                <section className="flex gap-2">
                    <Charts />
                    <Charts />
                </section>
                <section className="bg-white flex flex-col gap-3 px-4 py-4 rounded-lg shadow-2xl">
                    <h3>Recent Submissions</h3>
                    <ComponentListUserAnswer
                        listUserAnswer={[
                            {
                                id: '123',
                                code: '123456',
                                name: 'exam 1',
                                userName: 'ABc',
                                submittedAt: '16:44:47 12/6/2024',
                                processes: [
                                    {
                                        totalScore: 9.5,
                                        userAnswerDetails: [],
                                        skillExam: {
                                            id: '1',
                                            name: 'Listening',
                                        },
                                    },
                                    {
                                        totalScore: 9.5,
                                        userAnswerDetails: [
                                            {
                                                id: 'writing-1',
                                                answer: '1 abc degaf adfasdf sdfasdfas dsasfasda asdfasva asdfasdf',
                                                score: null,
                                            },
                                            {
                                                id: 'writing-2',
                                                answer: '2 abc degaf adfasdf sdfasdfas dsasfasda asdfasva asdfasdf',
                                                score: null,
                                            },
                                        ],
                                        skillExam: {
                                            id: '1',
                                            name: 'Writing',
                                        },
                                    },
                                    {
                                        totalScore: 9.5,
                                        userAnswerDetails: [
                                            {
                                                id: 'speaking-1',
                                                answer: 'http://localhost:3000/assets/media/test-media.m4a',
                                                score: null,
                                            },
                                            {
                                                id: 'speaking-2',
                                                answer: 'http://localhost:3000/assets/media/robo.m4a',
                                                score: null,
                                            },
                                            {
                                                id: 'speaking-3',
                                                answer: 'http://localhost:3000/assets/media/test-media.m4a',
                                                score: null,
                                            },
                                        ],
                                        skillExam: {
                                            id: '1',
                                            name: 'Speaking',
                                        },
                                    },
                                ],
                            },
                            {
                                id: '1234',
                                code: '123456',
                                name: 'exam 1',
                                userName: 'ABc',
                                submittedAt: '16:44:47 12/6/2024',
                                processes: [],
                            },
                            {
                                id: '1235',
                                code: '123456',
                                name: 'exam 1',
                                userName: 'ABc',
                                submittedAt: '16:44:47 12/6/2024',
                                processes: [],
                            },
                            {
                                id: '1236',
                                code: '123456',
                                name: 'exam 1',
                                userName: 'ABc',
                                submittedAt: '16:44:47 12/6/2024',
                                processes: [],
                            },
                            {
                                id: '1237',
                                code: '123456',
                                name: 'exam 1',
                                userName: 'ABc',
                                submittedAt: '16:44:47 12/6/2024',
                                processes: [],
                            },
                        ]}
                    />
                </section>
            </section>
        </div>
    )
}

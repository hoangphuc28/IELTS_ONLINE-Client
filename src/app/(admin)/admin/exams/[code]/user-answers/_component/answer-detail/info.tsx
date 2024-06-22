import { IUserAnswerFull } from '@/src/utils/shares/interfaces/IUserAnswerFull'

interface Props {
    userAnswer: IUserAnswerFull
}

export default function ComponentUserAnswerInfo({ userAnswer }: Props) {
    return (
        <section className="grid">
            <section className="grid gap-1 pb-1" style={{ borderBottom: '1px solid #ddd' }}>
                <h4 className="font-semibold">{userAnswer.user.name}</h4>
                <section className="flex flex-col w-full">
                    <p className="text-sm text-gray-500 flex items-center">
                        <svg className="w-[16px] h-[16px] me-1" fill="#aaa" viewBox="0 0 512 512">
                            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                        </svg>{' '}
                        <span className="truncate">{userAnswer.user.mail}</span>
                    </p>
                    <p className="text-gray-400 flex items-center" style={{ fontSize: '13px' }}>
                        <svg className="w-[12px] h-[12px] me-1" fill="#aaa" viewBox="0 0 512 512">
                            <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg>
                        <span>{new Date(userAnswer.timeStart).toLocaleString()}</span>
                    </p>
                    <p className="text-gray-400 flex items-center" style={{ fontSize: '13px' }}>
                        <svg className="w-[12px] h-[12px] me-1" fill="#aaa" viewBox="0 0 512 512">
                            <path d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z" />
                        </svg>
                        <span>
                            {userAnswer.submittedAt &&
                                new Date(userAnswer.submittedAt).toLocaleString()}
                        </span>
                    </p>
                </section>
            </section>
        </section>
    )
}

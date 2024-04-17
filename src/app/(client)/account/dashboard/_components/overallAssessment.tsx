import ComponentCardMini from './cards/mini'

export default function ComponentOverallAssessment() {
    return (
        <section>
            <h2 className="text-xl font-bold">Đánh giá tổng quan</h2>

            <section className="mt-3 flex gap-2">
                <ComponentCardMini
                    iconClass="fa-solid fa-arrow-trend-up"
                    name="Điểm trung bình"
                    title="0"
                />
                <ComponentCardMini
                    iconClass="fa-regular fa-pen-to-square"
                    name="Số bài hoàn thành"
                    title="0"
                />
                <ComponentCardMini
                    iconClass="fa-regular fa-clock"
                    name="Thời gian trung bình"
                    title="0 mins"
                />
            </section>
        </section>
    )
}

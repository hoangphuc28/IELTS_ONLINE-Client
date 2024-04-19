import ExamItem from "./examItem";
interface Exam {
    thumbnail: String,
    title: String,
    description: String
    status: String,
    author: String,
    createdAt: String,
}
const sampleExam: Exam[] = [{
    thumbnail: "https://onlineexammaker.com/components/com_exams/assets/exam-img/medicine/medicine_4.png",
    title: "Sample Exam",
    description: "Add new category | Preselected questions ",
    status: "Active",
    author: "John Doe",
    createdAt: "2024-04-18",
},
{
    thumbnail: "https://onlineexammaker.com/components/com_exams/assets/exam-img/medicine/medicine_4.png",
    title: "Sample Exam",
    description: "Add new category | Preselected questions ",
    status: "Active",
    author: "John Doe",
    createdAt: "2024-04-18",
},
{
    thumbnail: "https://onlineexammaker.com/components/com_exams/assets/exam-img/medicine/medicine_4.png",
    title: "Sample Exam",
    description: "Add new category | Preselected questions | ",
    status: "Active",
    author: "John Doe",
    createdAt: "2024-04-18",
},
{
    thumbnail: "https://onlineexammaker.com/components/com_exams/assets/exam-img/medicine/medicine_4.png",
    title: "Sample Exam",
    description: "Add new category | Preselected questions | ",
    status: "Active",
    author: "John Doe",
    createdAt: "2024-04-18",
},
{
    thumbnail: "https://onlineexammaker.com/components/com_exams/assets/exam-img/medicine/medicine_4.png",
    title: "Sample Exam",
    description: "Add new category | Preselected questions | ",
    status: "Active",
    author: "John Doe",
    createdAt: "2024-04-18",
},
{
    thumbnail: "https://onlineexammaker.com/components/com_exams/assets/exam-img/medicine/medicine_4.png",
    title: "Sample Exam",
    description: "Add new category | Preselected questions | ",
    status: "Active",
    author: "John Doe",
    createdAt: "2024-04-18",
},
{
    thumbnail: "https://onlineexammaker.com/components/com_exams/assets/exam-img/medicine/medicine_4.png",
    title: "Sample Exam",
    description: "Add new category | Preselected questions | ",
    status: "Active",
    author: "John Doe",
    createdAt: "2024-04-18",
},

];
export default function ExamsList() {


    return (
        <div className="exams-list">
            <div className="list-contain">
                {sampleExam?.map((item, index) => (
                <ExamItem key={index} index={index} data={item}/>
                ))}
            </div>
        </div>
    )
}
import { GroupQuestion } from "./GroupQuestion.class";
import { Part } from "./Part.class";
import { Answer, MultipleChoice } from "./Question";
import { QuestionType, SkillEnum, PartEnum } from "./enum";

// Create sample answers
const answer1 = new Answer('1');
answer1.content = 'Answer 1';
answer1.isCorrect = true;

const answer2 = new Answer('2');
answer2.content = 'Answer 2';
answer2.isCorrect = false;

// Create sample multiple choice question
const multipleChoiceQuestion = new MultipleChoice();
multipleChoiceQuestion.id = '1';
multipleChoiceQuestion.questionText = 'Sample multiple choice question';
multipleChoiceQuestion.answers = [answer1, answer2];

// Create sample group question
const groupQuestion = new GroupQuestion();
groupQuestion.id = '1';
groupQuestion.instruction = 'Sample group question instruction';
groupQuestion.questionType = QuestionType.MultipleChoice;
groupQuestion.data = [multipleChoiceQuestion];

// Create sample part object
const part = new Part();
part.title = 'Sample Part';
part.skill = SkillEnum.READING;
part.partNumber = PartEnum.Part3;
part.groupQuestions = [groupQuestion];

// Export the sample part object
export default part;

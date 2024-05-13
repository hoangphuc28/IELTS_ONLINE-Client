
import { MultipleChoice, MultipleResponse, DragAndDrop, MatchingHeading, FillTheBlank, MatchingFillBlank, Dropdown } from './Question'
import { QuestionType } from './enum'


export class GroupQuestion {
    public id: string = ''
    public instruction: string = ''
    public questionType: QuestionType = QuestionType.MultipleChoice
    public data:
        (| MultipleChoice
        | MultipleResponse
        | Dropdown
        | DragAndDrop
        | MatchingHeading
        | FillTheBlank
        | MatchingFillBlank)[] = []
}

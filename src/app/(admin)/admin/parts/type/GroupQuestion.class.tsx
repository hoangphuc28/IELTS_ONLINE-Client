import { Dropdown } from 'flowbite'
import { MultipleChoice, MultipleResponse, Matching, MatchingHeading, FillTheBlank, MatchingFillBlank } from './Question'
import { QuestionType } from './enum'


export class GroupQuestion {
    public id: string = ''
    public instruction: string = ''
    public questionType: QuestionType = QuestionType.MultipleChoice
    public data:
        (| MultipleChoice
        | MultipleResponse
        | Dropdown
        | Matching
        | MatchingHeading
        | FillTheBlank
        | MatchingFillBlank)[] = []
}

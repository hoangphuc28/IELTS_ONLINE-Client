export enum QuestionType {
    MultipleChoice = 'Multiple Choice',
    MultipleResponse = 'Multiple Response',
    Dropdown = 'Dropdown',
    Matching = 'Matching',
    MatchingHeading = 'Matching heading',
    FillInTheBlank = 'Fill in the Blank',
    MatchingFillInBlank = 'Matching fill in the blanks',
}
export enum SkillEnum {
    READING = 'READING',
    LISTENING = 'LISTENING',
    WRITING = 'WRITING',
    SPEAKING = 'SPEAKING',
}
export enum PartEnum {
    Part1= "Part 1",
    Part2= "Part 2",
    Part3= "Part 3",
    Part4= "Part 4",
}
export interface SkillPart {
    skill: SkillEnum
    parts: PartEnum[]
}
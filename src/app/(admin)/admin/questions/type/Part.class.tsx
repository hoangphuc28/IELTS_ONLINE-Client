import { GroupQuestion } from "./GroupQuestion.class";
import { SkillEnum, PartEnum } from "./enum";

export class Part {
    id: string = ''
    title: string = '';
    skill: SkillEnum = SkillEnum.LISTENING
    partNumber: PartEnum = PartEnum.Part1;
    groupQuestions: GroupQuestion[] = [];
}
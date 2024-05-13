import IGroup from "@/src/utils/shares/interfaces/IGroup";
import { GroupDTO } from "@/src/utils/shares/dto/group.dto";

export class GroupShowDTO extends GroupDTO {
    examSkillDetailId: string

    constructor(data: IGroup, examSkillDetailId: string) {
        super(data)
        this.examSkillDetailId = examSkillDetailId
    }
}
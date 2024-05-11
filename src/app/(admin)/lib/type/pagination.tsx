import { SkillEnum, PartEnum } from "../../admin/parts/type/enum"

export interface PaginationInterface {
        page: number,
        limit: number,
        search: string,
        filter: {
            skill: string,
            partNumber: string

        }
}
export enum userRole {
    ADMIN = 'ADMIN',
    LECTURE = 'LECTURE',
    USER = 'USER',
    TEMP_USER = 'TEMPUSER',
}

export type userRoleType = keyof typeof userRole

export default interface IUser {
    id: string
    name: string
    mail: string
    role: string
}
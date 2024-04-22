export enum sourceType {
    image = 'image',
    text = 'text',
    video = 'video',
    hybrid = 'hybrid'
}

export default interface ISourceData {
    type: string
    src: string
    content?: string
}
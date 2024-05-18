export class SignInDTO {
    username: string
    password: string

    constructor(data: { username: string; password: string }) {
        this.username = data.username
        this.password = data.password
    }
}

export class SignUpDTO {
    name: string
    mail: string
    password: string
    confirmPassword: string
    constructor(data: { name: string, mail: string, password: string, confirmPassword: string }) {
        this.name = data.name
        this.mail = data.mail
        this.password = data.password
        this.confirmPassword = data.confirmPassword
    }
}
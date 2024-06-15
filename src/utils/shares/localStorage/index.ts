import { testSkill, testSkillType } from "@utils/shares/interfaces/IMiniTest"

export const answersKey = 'ielts-online-client-answers-key'

export function getTokenKey() {
    return process.env.NEXT_PUBLIC_ACCESS_TOKEN_LOCAL_NAME || 'access_token'
}

export class TestItemManager {
    readonly name: string = 'testsStart'

    getFirst(): string | null {
        const items = JSON.parse(localStorage.getItem(this.name) || '[]')
        if (items.length > 0) return items[0]
        return null
    }

    get(): string[] {
        return JSON.parse(localStorage.getItem(this.name) || '[]')
    }

    update(data: string[]): void {
        localStorage.setItem(this.name, JSON.stringify(data))
    }

    reset() {
        this.update([])
    }

    toggle(name: testSkillType) {
        const items: string[] = this.get()
        const value = testSkill[name]
        if (items.includes(value)) return this.remove(name)
        return this.add(name)
    }

    add(name: testSkillType): void {
        const items: string[] = this.get()
        const result = []
        for (const key in testSkill) {
            if (Object.prototype.hasOwnProperty.call(testSkill, key)) {
                const k: testSkillType = key as testSkillType
                const skill: string = testSkill[k]
                if (k == name || items.includes(skill)) {
                    result.push(skill)
                }
            }
        }

        this.update(result)
        return
    }

    remove(name: testSkillType): void {
        const items: string[] = this.get()
        const value = testSkill[name]
        const result = items.filter((item) => item != value)
        this.update(result)
    }
}
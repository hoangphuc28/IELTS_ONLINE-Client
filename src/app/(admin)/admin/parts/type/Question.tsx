export class Answer {
    public id: string = ''
    public content: string = ''
    public numberOrder: number = 1
    public isCorrect: boolean = false
    public subAnswers: string[] = []
    constructor(id: string) {
        this.id = id;
    }
}

export class MultipleChoice {
    public id: string = ''
    public questionText: string = ''
    public answers: Answer[] = []
}

export class MultipleResponse {
    public id: string = ''
    public questionText: string = ''
    public answers: Answer[] = []
}

export class Dropdown {
    public id: string = ''
    public questionText: string = ''
    public answers: Answer[] = []
}

export class DragAndDrop {
    public id: string = ''
    public questionText: string = ''
    public answers: Answer[] = []
}

export class MatchingHeading {

        public id: string = '';
        public questionText: string = '';
        public correctAnswers: Answer[] = [];
        public totalAnswers: Answer[] = [];

}

export class FillTheBlank {
    public id: string = '';
     public questionText: string = '';
      public answers: Answer[] = [];
}

export class MatchingFillBlank {
    public id: string = '';
    public questionText: string = '';
    public answers: Answer[] = [];
    public totalAnswers: Answer[] = [];
}

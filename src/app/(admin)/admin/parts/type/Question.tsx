export class Answer {
    public id: string = ''
    public content: string = ''
    public isCorrect: boolean = false
    constructor(id: string) {
        this.id = id;
    }


    // Default constructor
}

export class MultipleChoice {
    public id: string = ''
    public question: string = ''
    public answers: Answer[] = []
}

export class MultipleReponse {
    public id: string = ''
    public question: string = ''
    public answers: Answer[] = []
}

export class Dropdown {
    public id: string = ''
    public question: string = ''
    public answers: Answer[] = []
}

export class Matching {
    public id: string = ''
    public question: string = ''
    public answer: Answer = new Answer()
}

export class MatchingHeading {

        public id: string = '';
        public question: string = '';
        public correctAnswers: Answer[] = [];
        public totalAnswers: Answer[] = [];

}

export class FillTheBlank {
    public id: string = '';
     public question: string = '';
      public answers: Answer[] = [];
}

export class MatchingFillBlank {
    public id: string = '';
    public question: string = '';
    public correctAnswers: Answer[] = [];
    public totalAnswers: Answer[] = [];
}

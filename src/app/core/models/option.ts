export class Option {
  id: number;
  questionId: number;
  name: string;
  isAnswer: boolean;

  isSelected: boolean = false;

  constructor(data: any) {
    this.id = data.id;
    this.questionId = data.questionId;
    this.name = data.name;
    this.isAnswer = data.isAnswer;
    this.isSelected = false;
  }
}

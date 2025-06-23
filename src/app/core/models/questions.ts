import { Option } from './option';

export class Question {
  id: number;
  name: string;
  questionTypeId: number;
  options: Option[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.questionTypeId = data.questionTypeId;

    this.options = [];
    if (data.options !== undefined) {
      this.options = data.options.map((o: any) => new Option(o));
    }
  }

  isSelected(): boolean {
    return this.options.some((o) => o.isSelected);
  }

  isCorrect(): boolean {
    return this.options.every((o) => o.isSelected === o.isAnswer);
  }
}

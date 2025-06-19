import {QuizConfig} from './quizconfig';
import {Question} from './questions';

export class Quiz {
  id: number;
  name: string;
  description: string;
  questions: Question[];
  config: QuizConfig;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.questions = [];
    data.questions.forEach((q: Question) => {
      this.questions.push(new Question(q))
    })
    this.config = new QuizConfig(data.config);
  }
}

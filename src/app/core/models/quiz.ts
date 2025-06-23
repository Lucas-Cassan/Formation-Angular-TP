import { QuizConfig } from './quizconfig';
import { Question } from './questions';

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
    if (data.questions !== undefined) {
      data.questions.forEach((q: Question) => {
        this.questions.push(new Question(q));
      });
    }

    if (data.config !== undefined) {
      this.config = new QuizConfig(data.config);
    }
  }
}

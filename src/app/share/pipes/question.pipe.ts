import {Pipe, PipeTransform} from '@angular/core';
import {Question} from '../../core/models/questions';
import {askQuestion} from '@angular/cli/src/utilities/prompt';

@Pipe({
  name: 'question'
})
export class QuestionPipe implements PipeTransform {

  transform(value: Question[], ...args: unknown[]): Question[] | null {
    if (args.length === 0) {
      return null;
    }

    if (args[0] === 'selected') {
      if (args[1] === 'not') {
        return value.filter(question => !question.isSelected());
      } else {
        return value.filter(question => question.isSelected());
      }
    }

    if (args[0] === 'correct') {
      if (args[1] === 'not') {
        return value.filter(question => !question.isCorrect());
      } else {
        return value.filter(question => question.isCorrect());
      }
    }

    return null;
  }

}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let res : string = '';
    if (args.length == 0) {
      res = value.length > 7 ? 'strong' : 'weak';
    } else if (args[0] === 'strict') {
      let x = value.match(/^[a-zA-Z0-9]+$/) ? res = 'oui' : res = 'non';
      res = (value.length > 7 && x === 'oui') ? 'strong' : 'weak';
    }
    return res;
  }

}

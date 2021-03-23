import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letters',
})
export class LettersPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    const phrase = [];
    const arg = args[0];
    let modulo: number = arg === 'min' ? 1 : 0;

    [...value].forEach((c, i) => {
      if (i % 2 === modulo) {
        phrase.push(c.toUpperCase());
      } else {
        phrase.push(c.toLowerCase());
      }
    });

    return phrase.join('');
  }
}

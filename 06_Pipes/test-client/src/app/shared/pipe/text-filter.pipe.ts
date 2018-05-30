import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe textFilter
 * @description
 *   Pipe de filtre de texte dans *ngFor
 * @example
 *   *ngFor="let entry of entries | textFilter:name:'ab'
 */
@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(values: Array<string | number>, node: string, term: string): Array<string | number> {
    return term === '' || values.length === 0 || node === '' ? 
        values
      : values.filter(value => value[node].toLowerCase().indexOf(term) >= 0);
  }

}

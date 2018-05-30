import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe orderBy
 * @description
 *   Pipe de tri dans *ngFor
 * @example
 *   *ngFor="let entry of entries | orderBy:age:true"
 */
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(entries: Array<number | string>, orderBy: string, asc = true): Array<number | string> {
    entries = entries || [];

    return entries.sort((left: number | string, right: number | string) => 
      left[orderBy] < right[orderBy] ? !!asc ? 1 : -1 : !!asc ? -1 : 1
    );
  }

}

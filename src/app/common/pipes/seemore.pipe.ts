import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore',
  standalone:true,
})
export class SeemorePipe implements PipeTransform {

  transform(overview:string, limit:number): string {
    return overview.split(" ").slice(0, limit).join(' ');
  }

}

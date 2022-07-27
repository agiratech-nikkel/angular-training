import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {
    let currentDate:any = new Date().getFullYear()
    let userDate:any = new Date(value).getFullYear()
    let userDob = currentDate - userDate
    return userDob;
  }

}

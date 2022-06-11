import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoEgp'
})
export class UsdtoEgpPipe implements PipeTransform {

  transform(value: number,currRate:number=18): number {
    // return value*20;
    return value*currRate;
  }

}

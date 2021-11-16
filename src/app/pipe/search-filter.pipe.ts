import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(arrayElement:any,args?:any): any {
    if(!arrayElement) return null;
    if(!args) return arrayElement;
    args=args.toLowerCase();
    console.log(args);
    return arrayElement.filter((data:any)=>JSON.stringify(data).toLowerCase().includes(args));
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupItems'
})
export class GroupItemsPipe implements PipeTransform {

  transform(items: Array<any>, args?: any): any {
    console.log(items);
    const OUTPUT = [];
    const FINAL_OUTPUT = [];
    items.map((item, i)=>{
      console.log(item, item.group);
      if(!item.group) {
        OUTPUT.push(item);
      } else if (OUTPUT[OUTPUT.length-1] && OUTPUT[OUTPUT.length-1].grouped) {
        OUTPUT[OUTPUT.length-1].items.push(item);
      } else {
        const GROUP = {
          grouped:true,
          items:[item]
        };
        OUTPUT.push(GROUP)
      }
    });
    console.log(OUTPUT);
    OUTPUT.map(item=> {
      if(item.grouped && item.items.length === 1) {
        FINAL_OUTPUT.push(item.items[0]);
      } else {
        FINAL_OUTPUT.push(item);
      }
    });
    console.log(FINAL_OUTPUT);
    return FINAL_OUTPUT;
  }

}

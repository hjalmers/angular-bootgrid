import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  getOrderForSize(size) {
    return (a,b)=> {
      if (a[size+'Order']  < b[size+'Order'] )
        return -1;
      if (a[size+'Order']  > b[size+'Order'] )
        return 1;
      return 0;
      //console.log(this.currentSize);
      /*let orderA = a[size+'Order'] ? a[size+'Order']:a.order;
      let orderB = b[size+'Order'] ? b[size+'Order']:b.order;

      //console.log(a,orderA,a[size+'Order'],b,orderB,b[size+'Order']);
      console.log(a.order,a[size+'Order'] ? a[size+'Order']:a.order);
      console.log(b.order,b[size+'Order'] ? b[size+'Order']:b.order);
      if (a[size+'Order'] ? a[size+'Order']:a.order < b[size+'Order'] ? b[size+'Order']:b.order) {
        return -1;
      }
      if (a[size+'Order'] ? a[size+'Order']:a.order > b[size+'Order'] ? b[size+'Order']:b.order) {
        return 1;
      }
      return 0;*/
    };
  };

  transform(items: any, currentSize: string): any {
    //this.currentSize = currentSize;
    console.log(currentSize);
    //items.sort(this.getOrderForSize(currentSize));

    //items = items.sort(this.getOrderForSize(currentSize));


    /*console.log('before',items);
    // loop through items and set new order
    for(let i = 0;i < items.length; i ++) {
      items[i][currentSize+'Order'] = i;
    }
    console.log('after',items);*/
    return items;
  }

}

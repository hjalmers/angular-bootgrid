import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent {
  innerWidth:number = window.innerWidth;
  currentSize:string;
  onResize(event:any){
    this.innerWidth = event.target.innerWidth; // window width
    this.currentSize = this.getCurrentSize();
  }

  constructor() {
    this.currentSize = this.getCurrentSize();
  }

  private getCurrentSize = function () {
    let viewportWidth = this.innerWidth;
    switch(true){
      case (viewportWidth < 576):
        return 'xs';
      case (viewportWidth < 768):
        return 'sm';
      case (viewportWidth < 992):
        return 'md';
      case (viewportWidth < 1200):
        return 'lg';
      case (viewportWidth >= 1200):
        return 'xl';
      default:
        return 'xs';
    }
  };

}

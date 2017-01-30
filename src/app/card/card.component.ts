import {Component, OnInit} from '@angular/core';
import {RandomWidgetComponent} from "../random-widget/random-widget.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public availableComponents = [
    {
      component: RandomWidgetComponent,
      selector: 'random-widget'
    }];

  public items = [{
    xl: 3,
    componentSelector: 'random-widget',
    extra: 'first',
    order: 0,
    xlOrder: 0,
    mdOrder: 0
  }, {
    xl: 3,
    componentSelector: 'random-widget',
    extra: 'second',
    order: 1,
    xlOrder: 1,
    mdOrder: 1
  }, {
    xl: 3,
    componentSelector: 'random-widget',
    extra: 'third',
    order: 2,
    xlOrder: 2,
    mdOrder: 2
  }, {
    xl: 3,
    componentSelector: 'random-widget',
    extra: 'forth',
    order: 3,
    xlOrder: 3,
    mdOrder: 3
  }];

  constructor() {
  }

  ngOnInit() {
  }

}

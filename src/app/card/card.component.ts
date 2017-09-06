import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RandomWidgetComponent} from "../random-widget/random-widget.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  public availableComponents = [
    {
      component: RandomWidgetComponent,
      selector: 'random-widget'
    }];

  public items = [{
    xlSize: 3,
    componentSelector: 'random-widget',
    position: 0,
    xlPosition: 0,
    mdPosition: 0
  }, {
    xlSize: 3,
    componentSelector: 'random-widget',
    position: 1,
    xlPosition: 1,
    mdPosition: 1
  }, {
    xlSize: 3,
    componentSelector: 'random-widget',
    position: 2,
    xlPosition: 2,
    mdPosition: 2
  }, {
    xlSize: 3,
    componentSelector: 'random-widget',
    position: 3,
    xlPosition: 3,
    mdPosition: 3
  }];

  constructor() {
  }

  ngOnInit() {
  }

}

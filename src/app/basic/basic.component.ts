import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicComponent implements OnInit {


  /*public items = [{
    xlSize: 3,
    componentSelector: 'random-widget',
    extra: 'first',
    position: 0,
    xlPosition: 0,
    mdPosition: 0
  }, {
    xlSize: 3,
    componentSelector: 'random-widget',
    extra: 'second',
    position: 1,
    xlPosition: 1,
    mdPosition: 1
  }, {
    xlSize: 3,
    componentSelector: 'random-widget',
    extra: 'third',
    position: 2,
    xlPosition: 2,
    mdPosition: 2
  }, {
    xlSize: 3,
    componentSelector: 'random-widget',
    extra: 'forth',
    position: 3,
    xlPosition: 3,
    mdPosition: 3
  }];*/
  //public items = [];
  public items = [{
    xlSize: 3,
    componentSelector: 'random-widget',
    extra: 'first',
    startPosition: 0,
    position: 0,
    mdPosition: 1
  }, {
    xlSize: 3,
    componentSelector: 'random-widget',
    extra: 'second',
    startPosition: 1,
    position: 1,
    mdPosition: 0
  }];

  constructor() { }

  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgNestedComponent } from './bg-nested.component';

describe('BgNestedComponent', () => {
  let component: BgNestedComponent;
  let fixture: ComponentFixture<BgNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

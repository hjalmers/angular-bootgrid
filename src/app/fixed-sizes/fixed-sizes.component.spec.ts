import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSizesComponent } from './fixed-sizes.component';

describe('FixedSizesComponent', () => {
  let component: FixedSizesComponent;
  let fixture: ComponentFixture<FixedSizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedSizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

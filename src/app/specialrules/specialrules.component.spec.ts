import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialrulesComponent } from './specialrules.component';

describe('SpecialrulesComponent', () => {
  let component: SpecialrulesComponent;
  let fixture: ComponentFixture<SpecialrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

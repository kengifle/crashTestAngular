import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pskl2Component } from './pskl2.component';

describe('Pskl2Component', () => {
  let component: Pskl2Component;
  let fixture: ComponentFixture<Pskl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pskl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pskl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

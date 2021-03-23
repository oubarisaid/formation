import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jour2Component } from './jour2.component';

describe('Jour2Component', () => {
  let component: Jour2Component;
  let fixture: ComponentFixture<Jour2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jour2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jour2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

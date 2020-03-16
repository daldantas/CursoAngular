import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula4Component } from './aula4.component';

describe('Aula4Component', () => {
  let component: Aula4Component;
  let fixture: ComponentFixture<Aula4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aula4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

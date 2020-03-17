import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula5Component } from './aula5.component';

describe('Aula5Component', () => {
  let component: Aula5Component;
  let fixture: ComponentFixture<Aula5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aula5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

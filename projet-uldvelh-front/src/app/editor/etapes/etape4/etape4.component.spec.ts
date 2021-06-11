import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape4Component } from './etape4.component';

describe('Etape4Component', () => {
  let component: Etape4Component;
  let fixture: ComponentFixture<Etape4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etape4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

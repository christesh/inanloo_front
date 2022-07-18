import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdocComponent } from './formdoc.component';

describe('FormdocComponent', () => {
  let component: FormdocComponent;
  let fixture: ComponentFixture<FormdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

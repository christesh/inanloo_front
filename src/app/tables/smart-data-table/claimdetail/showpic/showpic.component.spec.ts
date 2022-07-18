import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpicComponent } from './showpic.component';

describe('ShowpicComponent', () => {
  let component: ShowpicComponent;
  let fixture: ComponentFixture<ShowpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

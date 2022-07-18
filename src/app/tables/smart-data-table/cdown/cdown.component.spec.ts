import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdownComponent } from './cdown.component';

describe('CdownComponent', () => {
  let component: CdownComponent;
  let fixture: ComponentFixture<CdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

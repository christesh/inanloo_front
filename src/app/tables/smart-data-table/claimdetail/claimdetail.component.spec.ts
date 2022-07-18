import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimdetailComponent } from './claimdetail.component';

describe('ClaimdetailComponent', () => {
  let component: ClaimdetailComponent;
  let fixture: ComponentFixture<ClaimdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

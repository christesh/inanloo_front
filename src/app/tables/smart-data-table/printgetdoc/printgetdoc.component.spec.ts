import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintgetdocComponent } from './printgetdoc.component';

describe('PrintgetdocComponent', () => {
  let component: PrintgetdocComponent;
  let fixture: ComponentFixture<PrintgetdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintgetdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintgetdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

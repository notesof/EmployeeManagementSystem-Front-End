import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatusReportComponent } from './create-status-report.component';

describe('CreateStatusReportComponent', () => {
  let component: CreateStatusReportComponent;
  let fixture: ComponentFixture<CreateStatusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStatusReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusReportListComponent } from './status-report-list.component';

describe('StatusReportListComponent', () => {
  let component: StatusReportListComponent;
  let fixture: ComponentFixture<StatusReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

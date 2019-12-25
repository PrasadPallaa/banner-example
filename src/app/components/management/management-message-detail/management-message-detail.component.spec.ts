import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementMessageDetailComponent } from './management-message-detail.component';

describe('ManagementMessageDetailComponent', () => {
  let component: ManagementMessageDetailComponent;
  let fixture: ComponentFixture<ManagementMessageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementMessageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementMessageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

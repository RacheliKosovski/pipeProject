import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIntermediaryComponent } from './edit-intermediary.component';

describe('EditIntermediaryComponent', () => {
  let component: EditIntermediaryComponent;
  let fixture: ComponentFixture<EditIntermediaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIntermediaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

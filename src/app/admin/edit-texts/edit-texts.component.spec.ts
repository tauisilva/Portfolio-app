import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextsComponent } from './edit-texts.component';

describe('EditTextsComponent', () => {
  let component: EditTextsComponent;
  let fixture: ComponentFixture<EditTextsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTextsComponent]
    });
    fixture = TestBed.createComponent(EditTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductivityComponent } from './new-productivity.component';

describe('NewProductivityComponent', () => {
  let component: NewProductivityComponent;
  let fixture: ComponentFixture<NewProductivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

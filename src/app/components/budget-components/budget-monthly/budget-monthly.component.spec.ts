import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetMonthlyComponent } from './budget-monthly.component';

describe('BudgetMonthlyComponent', () => {
  let component: BudgetMonthlyComponent;
  let fixture: ComponentFixture<BudgetMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

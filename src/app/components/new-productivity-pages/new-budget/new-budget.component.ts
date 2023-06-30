import { Component } from '@angular/core';

@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.css']
})
export class NewBudgetComponent {

  incomeList = [
    {"Income Item": "full time job", "Income Category": "Full time job", "Amount": "123"},
    {"Income Item": "part time job", "Income Category": "Part time job", "Amount": "123"},
    {"Income Item": "Stocks", "Income Category": "Investment", "Amount": "123"},
    {"Income Item": "Birthday", "Income Category": "Gifts", "Amount": "123"},
  ]

}

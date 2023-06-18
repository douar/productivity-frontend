import { Component, OnInit, OnDestroy} from '@angular/core';
import {BudgetService} from "../../services/budget.service";
import {IBudgetCategory} from "../../_interfaces/IBudgetCategory";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-budget-categories',
  templateUrl: './budget-categories.component.html',
  styleUrls: ['./budget-categories.component.css']
})
export class BudgetCategoriesComponent implements OnInit, OnDestroy {

  budgetCategoryListSub!: Subscription
  budgetCategoryList: IBudgetCategory[] = []
  displayBudgetCategoryList: IBudgetCategory[] = []
  constructor(private budgetService: BudgetService) {
    this.budgetService.getBudgetCategoryList()
  }

  ngOnInit() {

    this.budgetCategoryListSub = this.budgetService.$allBudgetCategories.subscribe(
      budgetCategoryList => {
        this.budgetCategoryList = budgetCategoryList
        this.displayBudgetCategoryList = [...this.budgetCategoryList]
      }
    )

  }

  ngOnDestroy() {
    this.budgetCategoryListSub.unsubscribe()
  }
}

import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {BehaviorSubject} from "rxjs";
import {IBudgetCategory} from "../_interfaces/IBudgetCategory";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  $allBudgetCategories = new BehaviorSubject<IBudgetCategory[]>([])
  constructor(private httpService: HttpService) { }

  getBudgetCategoryList(){
    this.httpService.getBudgetCategory().pipe().subscribe({
      next: categoryList => {
        this.$allBudgetCategories.next(categoryList)
      },
      error: err => {
        console.log(err)
        alert("Unable to retrieve budget categories, please try again later.")
      }
    })
  }
}

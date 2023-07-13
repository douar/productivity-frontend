import {Component, OnInit} from '@angular/core';
import {IBudgetItem} from "../../../_interfaces/IBudgetItem";
import {IBudgetCategory} from "../../../_interfaces/IBudgetCategory";
import {IBudget} from "../../../_interfaces/IBudget";

@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.css']
})
export class NewBudgetComponent implements OnInit {

  incomeList: IBudgetCategory[] = []

  newBudget: IBudget = {
    budgetName: '',
    budgetCategories: []
  }

  categoryName: string = ''
  budgetItem: string = ''
  budgetAmount: number | null = null


  ngOnInit(){}

  nextForm2Click(){
    let form1= document.getElementById("form-1")
    let form2 = document.getElementById("form-2")
    if(form1 && form2 != null){
      form1.style.left = "-100rem";
      form2.style.left = "40px";
    }
  }
  backForm1Click() {
    let form1= document.getElementById("form-1")
    let form2 = document.getElementById("form-2")
    if(form1 && form2 != null){
      form1.style.left = "2.5rem";
      form2.style.left = "100rem";
    }
  }
  nextForm3Click() {
    let form2 = document.getElementById("form-2")
    let form3= document.getElementById("form-3")
    if(form2 && form3 != null){
      form2.style.left = "-100rem";
      form3.style.left = "40px";
    }
  }
  backForm2Click() {
    let form2 = document.getElementById("form-2")
    let form3= document.getElementById("form-3")
    if(form2 && form3 != null){
      form2.style.left = "2.5rem";
      form3.style.left = "100rem";
    }
  }

  addIncome() {
    if(this.incomeList.length == 0){
      let newIncomeItem: IBudgetItem = {
        budgetItem: this.budgetItem,
        budgetAmount: this.budgetAmount
      }
      let newIncomeCategory: IBudgetCategory = {
        budgetItemList: [],
        categoryName: this.categoryName
      }
      newIncomeCategory.budgetItemList.push(newIncomeItem)
      this.incomeList.push(newIncomeCategory)
    } else {
      let categoryExist = this.incomeList.find(exist => exist.categoryName == this.categoryName)
      if(categoryExist){
        let newIncomeItem: IBudgetItem = {
          budgetItem: this.budgetItem,
          budgetAmount: this.budgetAmount
        }
        categoryExist.budgetItemList.push(newIncomeItem)
      } else {
        let newIncomeItem: IBudgetItem = {
          budgetItem: this.budgetItem,
          budgetAmount: this.budgetAmount
        }
        let newIncomeCategory:IBudgetCategory = {
          categoryName: this.categoryName,
          budgetItemList: []
        }
        newIncomeCategory.budgetItemList.push(newIncomeItem)
        this.incomeList.push(newIncomeCategory)
      }
    }
  }
  addExpense(){

  }
  createNewBudgetClick() {
    console.log("create budget clicked")
  }
}

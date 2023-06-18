import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {BudgetDashboardComponent} from "./components/budget-dashboard/budget-dashboard.component";
import {BudgetCategoriesComponent} from "./components/budget-categories/budget-categories.component";
import {BudgetMonthlyComponent} from "./components/budget-monthly/budget-monthly.component";

const routes: Routes = [
  { path: 'budget-dashboard', component: BudgetDashboardComponent },
  { path: 'budget-categories', component: BudgetCategoriesComponent },
  { path: 'budget-monthly', component: BudgetMonthlyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

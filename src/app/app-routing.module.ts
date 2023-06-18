import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {BudgetDashboardComponent} from "./components/budget-components/budget-dashboard/budget-dashboard.component";
import {BudgetCategoriesComponent} from "./components/budget-components/budget-categories/budget-categories.component";
import {BudgetMonthlyComponent} from "./components/budget-components/budget-monthly/budget-monthly.component";
import {AccountComponent} from "./components/account/account.component";
import {NewProductivityComponent} from "./components/new-productivity/new-productivity.component";

const routes: Routes = [
  {path: 'manage-account', component: AccountComponent},
  {path: 'new-productivity', component: NewProductivityComponent},
  {path: 'budget-dashboard', component: BudgetDashboardComponent},
  {path: 'budget-categories', component: BudgetCategoriesComponent},
  {path: 'budget-monthly', component: BudgetMonthlyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

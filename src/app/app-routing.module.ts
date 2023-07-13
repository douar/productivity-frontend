import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {BudgetDashboardComponent} from "./components/budget-components/budget-dashboard/budget-dashboard.component";
import {BudgetCategoriesComponent} from "./components/budget-components/budget-categories/budget-categories.component";
import {BudgetMonthlyComponent} from "./components/budget-components/budget-monthly/budget-monthly.component";
import {AccountComponent} from "./components/account/account.component";
import {NewProductivityComponent} from "./components/new-productivity-pages/new-productivity/new-productivity.component";
import {NewBudgetComponent} from "./components/new-productivity-pages/new-budget/new-budget.component";
import {MainPageComponent} from "./components/main-components/main-page/main-page.component";

const routes: Routes = [
  {path: '', component:MainPageComponent},
  {path: 'manage-account', component: AccountComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'new-budget', component: NewBudgetComponent},
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

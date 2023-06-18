import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import { BudgetCategoriesComponent } from './components/budget-components/budget-categories/budget-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { BudgetDashboardComponent } from './components/budget-components/budget-dashboard/budget-dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import { BudgetNavComponent } from './components/budget-components/budget-nav/budget-nav.component';
import { BudgetMonthlyComponent } from './components/budget-components/budget-monthly/budget-monthly.component';
import { MainDashboardComponent } from './components/main-components/main-dashboard/main-dashboard.component';
import { MainNavComponent } from './components/main-components/main-nav/main-nav.component';
import { AccountComponent } from './components/account/account.component';
import { NewProductivityComponent } from './components/new-productivity/new-productivity.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetCategoriesComponent,
    BudgetDashboardComponent,
    BudgetNavComponent,
    BudgetMonthlyComponent,
    MainDashboardComponent,
    MainNavComponent,
    AccountComponent,
    NewProductivityComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import { BudgetCategoriesComponent } from './components/budget-categories/budget-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { BudgetDashboardComponent } from './components/budget-dashboard/budget-dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import { BudgetNavComponent } from './components/budget-nav/budget-nav.component';
import { BudgetMonthlyComponent } from './components/budget-monthly/budget-monthly.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetCategoriesComponent,
    BudgetDashboardComponent,
    BudgetNavComponent,
    BudgetMonthlyComponent,
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

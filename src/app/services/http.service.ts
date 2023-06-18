import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBudgetCategory} from "../_interfaces/IBudgetCategory";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getBudgetCategory(){
    return this.httpClient.get('http://localhost:3000/productivity/budget/categories'
    ) as Observable<IBudgetCategory[]>
  }

}

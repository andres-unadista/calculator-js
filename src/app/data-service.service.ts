import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IBudget, IBudgetItem } from './components/budget/budget.model';
import { LoginService } from './components/budget/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private login: LoginService) {}

  saveDataService(
    argBudget: IBudget,
    argIncomeList: IBudgetItem[],
    argExponseList: IBudgetItem[]
  ): Observable<any> {
    let budget = {
      budget: argBudget,
      incomes: argIncomeList,
      expenses: argExponseList,
    };
    console.log('DATA BUDGET');
    console.log(budget);

    return this.http.put(
      'https://fir-calculator-c8091-default-rtdb.firebaseio.com/data.json?auth='+this.login.token,
      budget
    );
  }

  getAllDataService(): Observable<any> {
    console.log(this.login.getIdToken());
    return this.http.get(
      'https://fir-calculator-c8091-default-rtdb.firebaseio.com/data.json?auth='+this.login.token,
    );
  }

  getOneDataService(index: number, type: string): Observable<any> {
    return this.http.get(
      `https://fir-calculator-c8091-default-rtdb.firebaseio.com/data/${type}/${index}?auth=${this.login.token}`
    );
  }

  modifyDataService(
    index: number,
    type: string,
    budget: IBudgetItem
  ): Observable<any> {
    return this.http.put(
      `https://fir-calculator-c8091-default-rtdb.firebaseio.com/data/${type}/${index}?auth=${this.login.token}`,
      budget
    );
  }

  deleteOneDataService(index: number, type: string): Observable<any> {
    return this.http.delete(
      `https://fir-calculator-c8091-default-rtdb.firebaseio.com/data/${type}/${index}?auth=${this.login.token}`
    );
  }
}

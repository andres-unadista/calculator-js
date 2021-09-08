import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBudget, IBudgetItem } from './components/budget/budget.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

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
      'https://fir-calculator-c8091-default-rtdb.firebaseio.com/data.json',
      budget
    );
  }

  getAllDataService(): Observable<any> {
    return this.http.get(
      'https://fir-calculator-c8091-default-rtdb.firebaseio.com/data.json'
    );
  }

  getOneDataService(index: number, type: string): Observable<any> {
    return this.http.get(
      `https://fir-calculator-c8091-default-rtdb.firebaseio.com/data/${type}/${index}`
    );
  }

  modifyDataService(
    index: number,
    type: string,
    budget: IBudgetItem
  ): Observable<any> {
    return this.http.put(
      `https://fir-calculator-c8091-default-rtdb.firebaseio.com/data/${type}/${index}`,
      budget
    );
  }

  deleteOneDataService(index: number, type: string): Observable<any> {
    return this.http.delete(
      `https://fir-calculator-c8091-default-rtdb.firebaseio.com/data/${type}/${index}`
    );
  }
}

export interface IBudget{
  total: number,
  incomeBudget: IBudgetItem,
  expenseBudget: IBudgetItem,
}

export interface IBudgetItem{
  description?:string,
  value:number,
  percentage?:number
}


import {IBudgetCategory} from "./IBudgetCategory";

export interface IBudget{
  id?: number,
  budgetName: string,
  budgetCategories: IBudgetCategory[]
}

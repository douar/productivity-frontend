import {IBudgetItem} from "./IBudgetItem";

export interface IBudgetCategory {
  id?: string,
  categoryName: string
  budgetItemList: IBudgetItem[]
}

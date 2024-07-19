import { ICategory } from "./category"

export interface IProduct{
  id: number,
  name: string,
  description: string,
  price: number,
  category: ICategory,
  promotion: boolean,
  newProduct: boolean
}
import { Injectable } from '@angular/core';
import { ICategory } from '../../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: ICategory[] = [
    {
      id: 1,
      name: 'Produção Própria'
    },
    {
      id: 2,
      name: 'Nacional'
    },
    {
      id: 3,
      name: 'Importado'
    },
    {
      id: 3,
      name: 'Premium'
    }
  ]
  constructor() { }

  getCategories(): ICategory[] {
    return this.categories
  }

}

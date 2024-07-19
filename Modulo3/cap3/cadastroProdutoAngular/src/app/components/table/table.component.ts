import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ICategory } from '../../interfaces/category';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
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

  product : IProduct = {} as IProduct

  saveProduct(){
    alert("Produto salvo")
  }
  
}

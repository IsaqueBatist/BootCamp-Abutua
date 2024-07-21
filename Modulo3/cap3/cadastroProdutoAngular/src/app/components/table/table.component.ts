import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ICategory } from '../../interfaces/category';
import { IProduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    FormComponent,
    CommonModule
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
  products: IProduct[] = []

  saveProduct(){
    this.product.id = this.products.length + 1
    this.products.push(this.product)
    this.product = {} as IProduct
    console.log('Produto salvo', this.products)
  }
  
}

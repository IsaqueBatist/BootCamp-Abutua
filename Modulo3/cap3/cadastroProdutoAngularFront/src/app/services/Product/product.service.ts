import { Injectable } from '@angular/core';
import { IProduct } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  products: IProduct[] = []

  postProduct(product: IProduct): void{
    product.id = this.products.length + 1
    this.products.push(product)
  }
  getProducts(): IProduct[]{
    return this.products
  }

  constructor() { }
}

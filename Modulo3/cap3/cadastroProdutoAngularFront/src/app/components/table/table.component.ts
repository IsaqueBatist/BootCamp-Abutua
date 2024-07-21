import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ICategory } from '../../interfaces/category';
import { IProduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/Category/category.service';
import { ProductService } from '../../services/Product/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    FormComponent,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [
    CategoryService,
    ProductService
  ]
})
export class TableComponent {

  categories: ICategory[] = []
  products: IProduct[] = []
  product: IProduct = {} as IProduct

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.loadCategories()
    this.loadProducts()
  }

  loadProducts(){ 
    this.productService.getProducts().subscribe({
      next: data => { this.products = data }
    })
  }
  loadCategories(){
    this.categoryService.getCategories().subscribe({
      next: data => { this.categories = data }
    })
  }

  saveProduct() {
    this.productService.postProduct(this.product).subscribe({
      next: data => {
        this.products.push(data)
        this.product = {} as IProduct
      }
    })
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories: Category[] = [];

  product: Product = {} as Product;
  deleteProduct: Product = {} as Product;
  products: Product[] = [];
  

  isShowForm: boolean = false
  isEditing: boolean = false

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        console.log(this.products); // Mover para dentro do bloco next
      }
    });
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: (data: Category[]) => {
        this.categories = data
        console.log(this.categories)
      }
    });
    console.log(this.categories)
  }

  saveProduct(save: boolean) {
    if (save) {
      if (this.isEditing) {
        this.productService.update(this.product).subscribe()
      } else {
        this.productService.save(this.product).subscribe({
          next: (data: Product) => {
            this.products.push(data);
            this.product = {} as Product;
          }
        });
      }
    }
    this.product = {} as Product;
    this.isShowForm = false
    this.isEditing = false


  }

  create() {
    this.isShowForm = true;
  }
  edit(product: Product) {
    this.isShowForm = true
    this.product = product;
    this.isEditing = true
  }
  delete(modal: any, product: Product) {
    this.deleteProduct = product;
    this.modalService.open(modal).result.then(
      (confirm) => {
        if (confirm) {
          this.productService.delete(product).subscribe({
            next: () => {
              this.products = this.products.filter((p) => product.id !== p.id)
            }
          });
        }
      }
    )
  }

}

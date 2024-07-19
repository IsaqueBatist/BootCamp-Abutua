import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input()
  categoryArray: ICategory[] = []

  @Input()
  product ?: IProduct;

  @Output()
  emitter = new EventEmitter<IProduct>()
  save(){
    this.emitter.emit(this.product)
  }
}

import { Component, Input } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input()
  categoryArray: ICategory[] = []
}

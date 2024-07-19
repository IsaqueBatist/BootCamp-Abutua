import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ICategory } from '../../interfaces/category';

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
      name: 'Nacional'
    },
    {
      id: 2,
      name: 'Importado'
    },
    {
      id: 2,
      name: 'Premium'
    }
  ]
}

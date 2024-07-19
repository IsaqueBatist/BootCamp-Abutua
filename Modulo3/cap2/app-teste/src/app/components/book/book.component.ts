import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../../book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input()
  book: IBook = {}

  @Output()
  saveEmitter = new EventEmitter<IBook>()

  save() {
    this.saveEmitter.emit(this.book)
  }
}

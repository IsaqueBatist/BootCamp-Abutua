import { Component, EventEmitter, Output } from '@angular/core';
import { IBook } from '../../book';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule,
    BookComponent
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {


  book: IBook = {} as IBook
  isUpdate: boolean = false
  idCount: number = 4

  books: IBook[] = [
    {
      id: 1,
      title: 'Java 24 horas',
      author: 'Glauco Todesco',
      price: 120
    },
    {
      id: 2,
      title: 'python 24 horas',
      author: 'Isaque Barbosa',
      price: 20
    },
    {
      id: 3,
      title: 'Angular 24 horas',
      author: 'Fernanda Maria',
      price: 300
    }
  ]

  saveBook() {
    if (!this.isUpdate) {
      this.book.id = this.idCount
      this.books.push(this.book)
      this.idCount++
    }
    this.book = {} as IBook
    this.isUpdate = false
  }

  deleteBook(removedbook: IBook) {
    this.books = this.books.filter((book) => book.id !== removedbook.id)
  }
  modifyButton(selectedbook: IBook) {
    this.book = selectedbook
    this.isUpdate = true

  }

}

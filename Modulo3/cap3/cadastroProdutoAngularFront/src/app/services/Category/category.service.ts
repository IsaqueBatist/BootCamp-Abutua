import { Injectable } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>("http://localhost:8080/categories")
  }


}

import { Injectable } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private http: HttpClient) { }

  postProduct(product: IProduct){
    return this.http.post<IProduct>('http://localhost:8080/products', product)
  }
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:8080/products')
  }

}

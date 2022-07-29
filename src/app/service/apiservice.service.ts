import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http : HttpClient
  ) { }


  getProductDetailsAPI() {
    return this.http.get('http://localhost:8080/api/v1/product/get-product');
  }
}

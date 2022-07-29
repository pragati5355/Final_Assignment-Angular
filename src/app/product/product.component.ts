import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { Product } from '../_models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  Getproductdetails : Product [] = [];

  constructor(
    private apiService : ApiserviceService
  ) { }

  ngOnInit(): void {
    this.apiService.getProductDetailsAPI().subscribe(
      (res:any)=>{
        console.log(res);
        this.Getproductdetails = res;

      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

}

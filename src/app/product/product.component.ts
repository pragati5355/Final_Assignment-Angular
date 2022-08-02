import { Component, OnInit , Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { ApiserviceService } from '../service/apiservice.service';
import { Product } from '../_models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  Getproductdetails : Product [] = [];
  productDetails: any;

  stripePromise = loadStripe(environment.stripe);


  constructor(
    private apiService : ApiserviceService,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.apiService.getProductDetailsAPI().subscribe(
      (res:any)=>{
        console.log(res);
        this.Getproductdetails = res;
        this.productDetails = res[0];
        console.log(this.Getproductdetails);

      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  async pay(quantitySelected : any ): Promise<void> {

    const paymentMethod = {

      //created a payment object
      productname  : this.Getproductdetails[0].productName,
      productId : this.Getproductdetails[0].id,
      successUrl : 'http://localhost:4200/sucess',
      cancelUrl : 'http://localhost:4200/cancel',
      productquantity : quantitySelected,

    };

    const stripepayment = await this.stripePromise;

    this.http.post("http://localhost:8080/api/v1/product/payments", paymentMethod)
    .subscribe((data: any) => {
      stripepayment.redirectToCheckout({
        sessionId: data.id,
      });
    });

  }

  async mobpay(selectedquantity : any ): Promise<void> {

    const paymentMethod = {

      //created a payment object
      productname  : this.Getproductdetails[0].productName,
      productId : this.Getproductdetails[0].id,
      successUrl : 'http://localhost:4200/sucess',
      cancelUrl : 'http://localhost:4200/cancel',
      productquantity : selectedquantity,

    };

    const stripepayment = await this.stripePromise;

    this.http.post("http://localhost:8080/api/v1/product/payments", paymentMethod)
    .subscribe((data: any) => {
      stripepayment.redirectToCheckout({
        sessionId: data.id,
      });
    });

  }


  

}

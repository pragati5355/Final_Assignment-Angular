import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    Swal.fire({
      icon: 'warning',
      title: 'Purchase Cancel',
      html: '<div><p style="font-family:"Poppins";font-style: normal;font-weight: 300;font-size: 18px;line-height: 30px;">Are you sure ! <br /><br/>You want to cancel this Order.</p></div>',
      imageWidth: 100,
      imageHeight: 100,
      showCloseButton: true,
      showCancelButton: false, 
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then(function() {
      window.location.href = "http://localhost:4200/productDetails";
    })

    

  }

}

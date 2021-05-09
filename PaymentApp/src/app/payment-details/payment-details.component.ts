import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllCards();
  }

  fillTable=(record:PaymentDetail)=>{
    this.service.formData = {...record};
  }

  deleteRecord=(id:number)=>{
    if(confirm("are you sure?"))
    this.service.deletePaymentDetail(id).subscribe(
      res => {
        this.service.getAllCards();
        this.toastr.error("Card deleted successfully","Payment Details delete");
      },
      err=> {console.log(err)}
    )}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}

  readonly baseUrl = 'http://localhost:17591/api/paymentDetails';
  formData: PaymentDetail = new PaymentDetail();
  listOfCards : PaymentDetail[];

  postPaymentDetail = () => {
    return this.http.post(this.baseUrl, this.formData);
  };

  updatePaymentDetail = () => {
    return this.http.put(`${this.baseUrl}/${this.formData.id}`, this.formData);
  };

  deletePaymentDetail = (id:number) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  };


  getAllCards = () => {
    return this.http.get(this.baseUrl)
    .toPromise()
    .then(res=> this.listOfCards= res as PaymentDetail[])
  };
}

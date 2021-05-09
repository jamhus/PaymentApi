import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}

  formData: PaymentDetail = new PaymentDetail();
  readonly baseUrl = 'http://localhost:17591/api/paymentDetails';

  postPaymentDetail = () => {
    return this.http.post(this.baseUrl, this.formData);
  };
}

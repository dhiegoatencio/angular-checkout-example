import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutApiService {

  constructor(
    private http: HttpClient,
  ) { }

  postPayment(payment) {
    // normally I create a service mapper
    // to map the sending data.
    // To get data from server side I do the same thing
    // With this "map layer" I can easily
    // change the format of the response
    // without touching other places
    return this.http.post('/pagar', payment);
  }
}

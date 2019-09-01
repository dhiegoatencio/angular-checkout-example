import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { CheckoutApiService } from './checkout-api.service';
import { TestBed } from '@angular/core/testing';

describe('CheckoutApiService', () => {
  let service: CheckoutApiService;
  let backend: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CheckoutApiService,
    ],
    imports: [
      HttpClientTestingModule,
    ]
  }));

  beforeEach(() => {
    const get = TestBed.get;
    service = get(CheckoutApiService);
    backend = get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post', () => {
    const postBody = {
      installments: 3,
    };
    service.postPayment(postBody).subscribe(response => {
      expect(response).toEqual(jasmine.objectContaining({
        'id': 2,
      }));
    })

    const response = {
      'id': 2
    };

    const call: TestRequest = backend.expectOne('/pagar');
    expect(call.request.method).toEqual('POST');
    call.flush(response);
    backend.verify();
  });
  
});

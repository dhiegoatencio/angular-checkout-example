import { TestBed } from '@angular/core/testing';

import { CheckoutApiService } from './checkout-api.service';

describe('CheckoutApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckoutApiService = TestBed.get(CheckoutApiService);
    expect(service).toBeTruthy();
  });
});

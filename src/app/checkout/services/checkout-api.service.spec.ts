import { CheckoutApiService } from './checkout-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('CheckoutApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: CheckoutApiService = TestBed.get(CheckoutApiService);
    expect(service).toBeTruthy();
  });
});

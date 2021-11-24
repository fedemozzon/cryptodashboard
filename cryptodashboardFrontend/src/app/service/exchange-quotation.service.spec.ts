import { TestBed } from '@angular/core/testing';

import { ExchangeQuotationService } from './exchange-quotation.service';

describe('ExchangeQuotationService', () => {
  let service: ExchangeQuotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeQuotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';

import { Quotation } from './openapi';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  url: string = 'https://api.binance.com';
  apiKey: string = '1Gt4ZNq2H1PcWGT84EGIfbXYLFrCsLKNS6c91JUQDvWLHO0g7r10pLwAAZX9Up5M';
  apiKeySecret: string = 'A0evO5AhBKnD5CAEICOUfrit93crE10MTI4MMxo55iiem46FzyaN5qDy2FflEi1n';
  constructor() { }
}

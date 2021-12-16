import { Injectable } from '@angular/core';
import { QuotationControllerService } from '../openapi';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(private quotation: QuotationControllerService) { }
  
  getQuotations(){
    return this.quotation.quotationControllerFind()
  }
}

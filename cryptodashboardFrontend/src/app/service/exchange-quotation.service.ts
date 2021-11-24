import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ExchangeQuotationService {

  constructor(private http: HttpClient ) { 
    
  }

  public getQuotationForExchange(url: string) { 
    return this.http.get(url)
    } 
}

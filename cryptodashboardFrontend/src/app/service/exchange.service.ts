import { Injectable } from '@angular/core';
import { Exchange, ExchangeControllerService } from '../openapi';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private exchange: ExchangeControllerService) {}

  addExchange(newExchange: Exchange){
    return this.exchange.exchangeControllerCreate(newExchange)
  }
}

import { Injectable } from '@angular/core';

import { CoinControllerControllerService} from './openapi/api/coinControllerController.service';
import { Coin } from './openapi/model/coin';


@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor( private http: CoinControllerControllerService) { }

  getCoinList(){
    return this.http.coinControllerControllerFind()
  }

  addCoin(coin:Coin){
    return this.http.coinControllerControllerCreate(coin)
  }

  // getCoin(coin:Coin){
  //   return this.http.coinControllerControllerFindById(coin.idCoin)
  // }


}


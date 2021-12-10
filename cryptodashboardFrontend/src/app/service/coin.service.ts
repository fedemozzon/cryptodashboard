import { Injectable } from '@angular/core';

import { CoinControllerService} from '../openapi/api/coinController.service';
import { Coin } from '../openapi/model/coin';


@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor( private http: CoinControllerService) { }

  getCoinList(){
    return this.http.coinControllerFind()
  }

  addCoin(coin:Coin){
    return this.http.coinControllerCreate(coin)
  }

  // getCoin(coin:Coin){
  //   return this.http.coinControllerFindById(coin.idCoin)
  // }


}


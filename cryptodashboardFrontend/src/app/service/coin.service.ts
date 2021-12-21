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

  getCoin(idCoin:string){
    return this.http.coinControllerFindById(idCoin)
  }
  deleteCoin(nameCoin: string){
    var newCoinToDelete
    this.getCoinList().subscribe(coins => {
    newCoinToDelete = coins.filter( coin => coin.nameCoin == nameCoin)[0]
    console.log(newCoinToDelete)
    return this.http.coinControllerDeleteById(newCoinToDelete.idCoin as string)
  })
  }


}


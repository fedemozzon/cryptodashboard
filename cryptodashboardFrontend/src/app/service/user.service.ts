import { Injectable } from '@angular/core';
import { User, UserControllerService } from '../openapi';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: UserControllerService) { }

    addUser(newUser: User ){
      return this.http.userControllerCreate(newUser)
    }
  
    // getCoin(coin:Coin){
    //   return this.http.coinControllerControllerFindById(Number(coin.idCoin))
    // }
}

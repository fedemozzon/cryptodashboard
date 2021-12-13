import { Injectable } from '@angular/core';
import { User, UserControllerService,LoginControllerService, InlineObject} from '../openapi';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: UserControllerService, private auth: LoginControllerService) { }

    addUser(newUser: User ){
      return this.http.userControllerCreate(newUser)
    }

    register(newUser: User){
      return this.auth.loginControllerSignUp(newUser)
    }

    login(user: InlineObject){
      return this.auth.loginControllerLogin(user)
    }
  
    // getCoin(coin:Coin){
    //   return this.http.coinControllerControllerFindById(Number(coin.idCoin))
    // }
}

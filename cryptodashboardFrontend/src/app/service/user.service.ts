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
    getInfo(){
      return this.auth.loginControllerWhoAmI()
    }
    getUsers(){
      return this.http.userControllerFind()
    }
    addCoin(userId: string, newUser:User){
      return this.http.userControllerUpdateById(userId,newUser)
    }
    getUserById(userId:string){
      return this.http.userControllerFindById(userId)
    }

    deleteCoin(userId:string, newUser:User){
      console.log(newUser)
      console.log(userId)
      return this.http.userControllerUpdateById(userId,newUser)
    }
  
}

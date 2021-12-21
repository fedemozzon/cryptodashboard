import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Configuration, InlineObject, InlineResponse200, UserControllerService } from '../openapi';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  title = 'Crypto Dashboard';
  sessionOn:boolean = false
  newCoinForm:FormGroup
  logUser:InlineObject
  actUser: any
  configuration
  constructor(private router:Router,  private service: UserService, @Optional() configuration: Configuration) {
    if (configuration) {
      this.configuration = configuration;
  }

      this.logUser= <InlineObject>{
        email:'',
        password:''
      }
    this.newCoinForm = new FormGroup({
      userEmail: new FormControl(this.logUser.email),
      userPassword: new FormControl(this.logUser.password),
    }); 
   }

  ngOnInit(): void {
    localStorage.clear()
    this.sessionOn = localStorage.getItem('token') != null;
  }
  ngOnChanges(){
    localStorage.clear()
  }
    onSubmit(){
    var logUser=<InlineObject>{
      email:this.newCoinForm.get("userEmail")?.value ,
       password: this.newCoinForm.get("userPassword")?.value,
     }
     console.log(logUser)
     this.service.login(logUser).subscribe(
       (resp:InlineResponse200)=> {
        if (this.configuration) {
          this.configuration=this.configuration
          this.configuration.accessToken=resp.token
        }  
        localStorage.setItem('token', resp.token as string)
        this.service.getUsers().subscribe((resp) => {localStorage.setItem('userId', resp.filter((user)=> user.email == logUser.email)[0].idUser as string)
        this.router.navigateByUrl("/coins")
       })
       }
       )
  }

}

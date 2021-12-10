import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../openapi';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  newCoinForm:FormGroup
  user:User

  constructor(private route: ActivatedRoute , private router:Router,  private service: UserService ) { 
      this.user= <User>{
        username:'',
        mail:'',
        password:''
      }

    this.newCoinForm = new FormGroup({
      userUsername: new FormControl(this.user.username),
      userMail: new FormControl(this.user.mail),
      userPassword: new FormControl(this.user.password)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    var user=<User>{
    username:this.newCoinForm.get("userUsername")?.value ,
     mail: this.newCoinForm.get("userMail")?.value,
     password: this.newCoinForm.get("userPassword")?.value,
     coins:[]
   }
   console.log(user)
   this.service.addUser(user).subscribe(()=> this.router.navigateByUrl("/coins"))
 }

}

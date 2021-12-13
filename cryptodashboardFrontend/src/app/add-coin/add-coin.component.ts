import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from '../service/coin.service';
import { Coin } from '../openapi';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.component.html',
  styleUrls: ['./add-coin.component.scss']
})
export class AddCoinComponent implements OnInit {
  newCoinForm:FormGroup
  coin:Coin

  constructor(private route: ActivatedRoute , private router:Router,  private service: CoinService, private userService: UserService) { 
    var idx=route.snapshot.paramMap.get("idx");
    if (idx){
      this.coin=<Coin>{
        nameCoin: "" ,
        description: "",
        acronym:"",
        linkToWikipedia:""
      }

    }else{
      this.coin= <Coin>{
        nameCoin: "" ,
        description: "",
        acronym:"",
        linkToWikipedia:""
      }
    }

    this.newCoinForm = new FormGroup({
      coinName: new FormControl(this.coin.nameCoin),
      coinDescription: new FormControl(this.coin.description),
      coinAcronym: new FormControl(this.coin.acronym),
      coinLinkToWikipedia: new FormControl(this.coin.linkToWikipedia)
    }); 
  }

  ngOnInit(): void {}
  onSubmit(){
    var coin=<Coin>{
    nameCoin:this.newCoinForm.get("coinName")?.value ,
     description: this.newCoinForm.get("coinDescription")?.value,
     acronym: this.newCoinForm.get("coinAcronym")?.value,
     linkToWikipedia:this.newCoinForm.get("coinLinkToWikipedia")?.value,
    
   }
   let id = localStorage.getItem('userId') as string
   this.userService.getUserById(id).subscribe((user) => {
    user.coins.push(coin)
    console.log(user)
    this.userService.addCoin(id, user).subscribe((user) => console.log(user))
   })
   this.service.addCoin(coin).subscribe(()=> this.router.navigateByUrl("/coins"))
 }

 
  }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from '../service/coin.service';
import { Coin } from '../openapi';

@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.component.html',
  styleUrls: ['./add-coin.component.scss']
})
export class AddCoinComponent implements OnInit {
  newCoinForm:FormGroup
  coin:Coin

  constructor(private route: ActivatedRoute , private router:Router,  private service: CoinService) { 
    var idx=route.snapshot.paramMap.get("idx");
    if (idx){
      this.coin=<Coin>{
        nameCoin: "" ,
        descriptionCoin: "",
        acronym:"",
        linkToWikipedia:""
      }

    }else{
      this.coin= <Coin>{
        nameCoin: "" ,
        descriptionCoin: "",
        acronym:"",
        linkToWikipedia:""
      }
    }

    this.newCoinForm = new FormGroup({
      coinName: new FormControl(this.coin.nameCoin),
      coinDescription: new FormControl(this.coin.descriptionCoin),
      coinAcronym: new FormControl(this.coin.acronym),
      coinLinkToWikipedia: new FormControl(this.coin.linkToWikipedia)
    }); 
  }

  ngOnInit(): void {}
  onSubmit(){
    var coin=<Coin>{
    nameCoin:this.newCoinForm.get("coinName")?.value ,
     descriptionCoin: this.newCoinForm.get("coinDescription")?.value,
     acronym: this.newCoinForm.get("coinAcronym")?.value,
     linkToWikipedia:this.newCoinForm.get("coinLinkToWikipedia")?.value,
    
   }
   console.log(coin)
   this.service.addCoin(coin).subscribe(()=> this.router.navigateByUrl("/coins"))
 }

 
  }

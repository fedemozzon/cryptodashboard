import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from '../openapi';
import { CoinService } from '../service/coin.service';

@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.scss']
})
export class AddExchangeComponent implements OnInit {
  newExchangeForm:FormGroup
  coin:Coin

  constructor(private route: ActivatedRoute , private router:Router,  private service: CoinService) { 
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

    this.newExchangeForm = new FormGroup({
      exchangeName: new FormControl(this.coin.nameCoin),
      exchangeScript: new FormControl(this.coin.description),
    }); 
  }

  ngOnInit(): void {
  }
  onSubmit(){
    var coin=<Coin>{
    nameCoin:this.newExchangeForm.get("exchangeName")?.value ,
     description: this.newExchangeForm.get("exchangeScript")?.value,
    
   }
   console.log(this.runScript(coin.description))
  //  this.service.addCoin(coin).subscribe(()=> this.router.navigateByUrl("/coins"))
 }

 async runScript(script: string) {
  let valor = await eval(script)
  return valor
}

}

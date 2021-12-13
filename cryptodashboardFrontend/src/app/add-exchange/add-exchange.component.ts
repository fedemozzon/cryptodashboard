import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin, Exchange } from '../openapi';
import { CoinService } from '../service/coin.service';
import { ExchangeService } from '../service/exchange.service';

@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.scss']
})
export class AddExchangeComponent implements OnInit {
  newExchangeForm:FormGroup
  exchange: Exchange
  coin:Coin = {
    nameCoin:'',
    acronym:'',
    description:'',
    linkToWikipedia:'',
    idCoin:''
  }

  constructor(private route: ActivatedRoute , private router:Router,  private service: ExchangeService, private coinService: CoinService) { 
    var idx=route.snapshot.paramMap.get("idx");
    if (idx){
      this.exchange=<Exchange>{
        nameExchange:'',
        script:'',
        coinId:''
      }

    }else{
      this.exchange= <Exchange>{
        nameExchange:'',
        script:'',
        coinId:''
      }
    }

    this.newExchangeForm = new FormGroup({
      exchangeName: new FormControl(this.exchange.nameExchange),
      exchangeScript: new FormControl(this.exchange.script),
    }); 
  }

  ngOnInit(): void {
    this.coinService.getCoinList().subscribe((coins)=> this.coin = coins.filter((coinAct)=> coinAct.nameCoin == this.route.snapshot.paramMap.get("idx"))[0])
  }
  onSubmit(){
    var exchange=<Exchange>{
    nameExchange:this.newExchangeForm.get("exchangeName")?.value ,
     script: this.newExchangeForm.get("exchangeScript")?.value,
     coinId:this.coin.idCoin
    
   }
  //  this.runScript(exchange.script)
   this.service.addExchange(exchange).subscribe(()=> this.router.navigateByUrl("/coins"))
 }

 async runScript(script: string) {
  let valor = await eval(script)
  return valor
}

}

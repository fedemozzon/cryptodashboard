import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from '../service/coin.service';
// import { ExchangeQuotationService} from '../service/exchange-quotation.service';
import { Coin } from '../openapi/model/coin';
import { Quotation } from '../openapi';
import { QuotationService } from '../service/quotation.service';



@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  idCoin:string = ''
  coins: Coin [] = []
  results: Quotation [] = []
  displayedColumns: string[] = ['Date','Price','Exchange'];
  coin:Coin = {
    nameCoin:'',
    acronym:'',
    description:'',
    linkToWikipedia:'',
    idCoin:''
  }
  graph: any

  
  constructor(private route: ActivatedRoute,private service: CoinService, private quotationsService: QuotationService) { }

  ngOnInit(): void {
    this.idCoin = this.route.snapshot.paramMap.get("idx") as string
    this.service.getCoin(this.idCoin).subscribe((coin) => this.coin = coin)
    this.quotationsService.getQuotations().subscribe((quotations) => {this.results = quotations.filter((quotation)=> quotation.coinId = this.idCoin)
    console.log(this.results)
    })
  //   this.service.getCoinList().subscribe((coins )=> {
  //   this.coin = coins.filter(coin => coin.nameCoin == this.route.snapshot.paramMap.get("idx"))[0]
  //   this.exchangeService.getQuotationForExchange(this.quotationForDay+this.coin.acronym+this.time).subscribe(response => {
  //     this.results = response
  //     this.results = this.results.Data.Data
  //     console.log(this.results.map(function (obj:any) {return obj.high }))
  //     this.graph = {
  //       data: [
  //           { x: this.results.map(function (obj:any) {return obj.time }) , y:this.results.map(function (obj:any) {return obj.high }) , type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
  //       ],
  //       layout: {width: 400, height: 400, title: 'A Fancy Plot'}
  //   };
  //   })
  // }
  // );
  }
  

}

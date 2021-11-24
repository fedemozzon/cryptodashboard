import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from '../service/coin.service';
import { ExchangeQuotationService} from '../service/exchange-quotation.service';
import { Coin } from '../openapi/model/coin';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  coins: Coin [] = []
  quotationForHour: string = "https://min-api.cryptocompare.com/data/v2/histohour?tsym=USD&fsym="
  quotationForDay: string = "https://min-api.cryptocompare.com/data/v2/histoday?tsym=USD&fsym="
  time :string = "&limit=3"
  results: any
  displayedColumns: string[] = ['time','high','low'];
  coin:Coin = {
    nameCoin:'papaa',
    acronym:'papaaa',
    descriptionCoin:'',
    linkToWikipedia:''
  }
  constructor(private route: ActivatedRoute,private service: CoinService, private exchangeService:ExchangeQuotationService) { }

  ngOnInit(): void {
    this.service.getCoinList().subscribe((coins )=> {
    this.coin = coins.filter(coin => coin.nameCoin == this.route.snapshot.paramMap.get("idx"))[0]
    this.exchangeService.getQuotationForExchange(this.quotationForDay+this.coin.acronym+this.time).subscribe(response => {
      this.results = response
      this.results = this.results.Data.Data
      console.log(this.results)
    })
  }
  );
  }

}

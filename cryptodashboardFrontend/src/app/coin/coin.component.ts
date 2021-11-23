import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from '../coin.service';
import { Coin } from '../openapi/model/coin';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  coins: Coin [] = []
  coin:Coin = {
    nameCoin:'papaa',
    acronym:'papaaa',
    descriptionCoin:'',
    linkToWikipedia:''
  };
  constructor(private route: ActivatedRoute,private service: CoinService) { }

  ngOnInit(): void {
    this.service.getCoinList().subscribe((coins )=> {
    this.coin = coins.filter(coin => coin.nameCoin == this.route.snapshot.paramMap.get("idx"))[0]
  });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinService } from '../coin.service';
import { Coin } from '../openapi/model/coin'; 

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  coins:Coin[] = []
  dataSource:Coin[] = []
  displayedColumns: string[] = ['name', 'acronym', 'description', 'linkToWikipedia','actions'];
  constructor(private service: CoinService) { }

  ngOnInit(): void {
    this.service.getCoinList().subscribe((coins )=> this.coins = coins);
    this.dataSource = this.coins
  }
getRecord(some:any){

}

}

import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { CoinService } from '../service/coin.service';
import { Coin } from '../openapi/model/coin';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  coins:Coin[] = []
  dataSource:Coin[] = []
  displayedColumns: string[] = ['name', 'acronym', 'description', 'linkToWikipedia'];
  constructor(private service: CoinService, private router:Router) {
   }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.service.getCoinList().subscribe((coins )=> this.coins = coins);
      this.dataSource = this.coins
      console.log(localStorage.getItem('userId'))
    }
    else this.router.navigateByUrl("/")


  }
getRecord(some:any){

}

}

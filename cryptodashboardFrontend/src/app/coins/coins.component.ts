import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { CoinService } from '../service/coin.service';
import { Coin } from '../openapi/model/coin';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  title = 'Crypto Dashboard';
  sessionOn:boolean = localStorage.getItem('token') != null;
  coins:any[] = [] 
  dataSource:any[] = []
  displayedColumns: string[] = ['name', 'acronym', 'description', 'linkToWikipedia', 'Action'];
  constructor(private service: UserService, private router:Router,private coinService: CoinService ) {
   }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.service.getUserById(localStorage.getItem('userId')as string).subscribe((user)=> {
        this.coins = user.coins
        this.dataSource = user.coins
         } )
    }
    else this.router.navigateByUrl("/")


  }
deleteCoin(coinToDelete:Coin){
  this.coins = this.coins.filter((coin)=> coinToDelete.nameCoin != coin.nameCoin)
  console.log(this.coins)
  this.service.getUserById(localStorage.getItem('userId') as string).subscribe((user)=> {
    user.coins= user.coins.filter((monedita: any) => coinToDelete.nameCoin != monedita.nameCoin).slice(0)
    this.service.deleteCoin(user.idUser as string, user).subscribe((user)=> console.log(user))
  })

}

}

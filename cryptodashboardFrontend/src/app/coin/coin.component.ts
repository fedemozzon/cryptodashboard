import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from '../service/coin.service';
// import { ExchangeQuotationService} from '../service/exchange-quotation.service';
import { Coin } from '../openapi/model/coin';
import { Quotation } from '../openapi';
import { QuotationService } from '../service/quotation.service';
import { groupBy } from 'lodash';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  seleccionado:number = 1;
  title = 'Crypto Dashboard';
  sessionOn:boolean = localStorage.getItem('token') != null;
  newCoinForm:FormGroup
  idCoin:string = ''
  coins: Coin [] = []
  arrayForDays: any[] = [[]]
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
  graph2: any
  daysBehind: number = 1

  
  constructor(private route: ActivatedRoute,private service: CoinService, private quotationsService: QuotationService, private router: Router) { 
    this.newCoinForm = new FormGroup({
      daysToShow: new FormControl(),
    }); 
  }

  ngOnInit(): void {
    console.log(this.seleccionado)
    if (localStorage.getItem('token') != null){
      this.idCoin = this.route.snapshot.paramMap.get("idx") as string
      this.service.getCoin(this.idCoin).subscribe((coin) => this.coin = coin)
      this.quotationsService.getQuotations().subscribe((quotations) => {this.results = quotations.filter((quotation)=> quotation.coinId == this.idCoin)
        let to1 = new Date()
        let today = new Date(to1)
        today.setDate(today.getDate() +1)
        let firstday = new Date(today.getTime() - (60 * 60 *24 * (this.seleccionado +1) * 1000)); //adding (60*60*6*24*1000) means adding six days to the firstday which results in lastday (saturday) of the week
        let y1 = this.results.filter((date)=> (new Date(date.dateCreation)) >= (firstday as Date) && new Date(date.dateCreation) <= (today as Date))
            this.graph = {
          data: [
              { x: y1.map(function (obj:any) {return obj.dateCreation.substring(3,21) }) , y:y1.map(function (obj:any) {return obj.price }) , type: 'scatter', mode: 'lines+points'},
          ],
          layout: {width: 450, height: 450, title: 'Precio por día'}
      };
      this.graph2 = {
        data: [
          {
            x: y1.map(function (obj:any) {return obj.dateCreation}),
            y: y1.map(function (obj:any) {return obj.price }),
            type: 'box'
          }
        ],
        layout: {width: 450, height: 450, title: 'Precio por día'}
    };
      })
    }
    else this.router.navigateByUrl("/")
  }
    //event handler for the select element's change event
    selectChangeHandler (event: any) {
      //update the ui
      this.seleccionado = event.target.value;
      console.log(this.seleccionado)
      this.ngOnInit()
    }
  

}

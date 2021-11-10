import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coin:Coin = {
    id: 1,
    name: 'Bitcoin'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

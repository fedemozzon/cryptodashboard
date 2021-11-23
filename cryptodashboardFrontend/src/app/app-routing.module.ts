import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoinComponent } from './add-coin/add-coin.component';
import { CoinComponent } from './coin/coin.component';
import { CoinsComponent } from './coins/coins.component';

const routes: Routes = [
  { path: '', component: CoinsComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'addCoins', component: AddCoinComponent },
  { path: 'coins/:idx', component: CoinComponent },
  { path: 'coins/modify/:idx', component: AddCoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

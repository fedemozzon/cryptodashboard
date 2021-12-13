import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoinComponent } from './add-coin/add-coin.component';
import { AddExchangeComponent } from './add-exchange/add-exchange.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CoinComponent } from './coin/coin.component';
import { CoinsComponent } from './coins/coins.component';
import { LoginUserComponent } from './login-user/login-user.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'addExchange', component: AddExchangeComponent },
  { path: 'addUser', component: AddUserComponent },
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

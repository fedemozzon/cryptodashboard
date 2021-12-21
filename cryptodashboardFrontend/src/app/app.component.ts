import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sessionOn:boolean = localStorage.getItem('token') != null;
  title = 'Crypto Dashboard';
}

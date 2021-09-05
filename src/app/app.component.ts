import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EproMachine';
  constructor(){
    console.log("https://epro-f862b-default-rtdb.firebaseio.com/LogMachine.json")
  }
}

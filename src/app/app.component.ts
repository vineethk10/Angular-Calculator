import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vineethCalculator';
  show = '0';
  currentValue = '';

  displayInput(value:string){
    this.currentValue = this.currentValue + value;
    this.show = this.currentValue;
  }

  getResult(){
    this.show =  eval(this.currentValue);
    this.currentValue = this.show;
  }

  clearData(){
    this.currentValue = '';
    this.show = '0';
  }

  goBack(){
    this.currentValue = this.currentValue.slice(0,-1);
    this.show = this.currentValue;
    if(this.show == ''){
      this.show = '0';
    }
  }

  calcValue(solve:any){
    if(solve.charAt(0) == '0'){
      solve = solve.slice(1,);
    }
    this.show = eval(solve);
  }
}

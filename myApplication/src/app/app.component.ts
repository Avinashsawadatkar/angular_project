import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApplication';
  //propertyName : dataType = value;
  a = 20;
  b: number = 90;
  c!: number;
  city: string = "Pune";
 //1. one way db 2. two way db
  //1. one way db
  //1.string interpolation>>{{}} >>syntax {{propertyName}}
  //2.property binding >>[]>> [attribute]="proprtyName"
  //3. event binding>>()>>on event will bind data to the property
  //Two way data bind >> [()]>> [(ngModel)]="propertyName"
  myName = "Avinash";
  isDisable = false;
  fruit!:string;
  favPlayer = "Virat kohli";
  yourName = "";
  constructor() { }

  submit() {
    this.fruit = "Mango";
  }

 

}

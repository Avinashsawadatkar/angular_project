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
  favColor="";
  getMyInput(myInput: any){
    console.log(myInput.value);
    
  }

  // showName = false; //*ngIf Directive

  //*ngSwitch directive
  // setProgramingLanguage(event: any){
  //   this.selectProgramingLanguage = event.target.value;
  // }
  // selectProgramingLanguage="";

  // *ngFor directive
  // products = [
  //   {name :'Laptop', id : 'prod01',price : 32000},
  //   {name : 'TV', id : 'prod02', price : 23000},
  //   {name : 'Mobile', id : 'prod03', price : 8000},
  //   {name : 'FAN', id : 'prod04', price : 2000}
  // ];
  

  //*ngClass Dirctive
  
  
  constructor() { }

  submit() {
    this.fruit = "Mango";
  }
  
}

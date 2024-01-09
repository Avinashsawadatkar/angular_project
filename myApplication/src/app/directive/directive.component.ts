import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  showDiv : boolean = true;
  toggle(){
  // this.showDiv =false;

  this.showDiv = ! this.showDiv
}

show : boolean = true;
effect(){
  // this.show = false;

  this.show = !this.show;
}
visiible : boolean =true;
visible(){
  this.visiible = !this.visiible;

}

listItem = ["Coffee","Tea","Sugar","Milk","Coffee","Tea","Sugar","Milk",
"Coffee","Tea","Sugar","Milk",];

studentData = ["Student","name","adress","age","dob",
"Student","name","adress","age","dob",];

data=['name','age','name','age','name','age','name','age'];

color="black";
month="november";

}

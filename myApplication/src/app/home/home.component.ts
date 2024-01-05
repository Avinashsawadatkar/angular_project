import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//constructer is a method which get invoked internally at the time of component initilationzion
  constructor(private router : Router) {}


  test() {
    this.router.navigateByUrl("test");
  }

  directiveComponent(){
    this.router.navigateByUrl("directive");
  }
}

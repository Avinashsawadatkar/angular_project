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
}

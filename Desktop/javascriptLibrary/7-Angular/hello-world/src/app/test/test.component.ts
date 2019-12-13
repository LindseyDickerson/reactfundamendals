import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-test',
  template: `
      <h2>
      Welcome {{name}}
      </h2>
      <h2 class="text-success">Codevolution</h2>
      <h2 [class]="successClass">Codevolution</h2>
    `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Codevolution";
  public successClass = "text-success";
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}

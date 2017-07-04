import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{ title }}</h1>
  <my-tutorial></my-tutorial>
  `,
})
export class AppComponent { 

  //property binding
  public title = "TEDU Chanel";
 
}
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <my-tutorial></my-tutorial>
  `,
})
export class AppComponent { 

  //property binding
  public image = "http://lorempixel.com/300/300"

  public welcomeText = "type for text"
}
import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>{{title}}</h2>
    <h3 *ngIf="showLineIf">This ngIf directive line.</h3>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">THis line color is red</p>
        <p *ngSwitchCase="'blue'">THis line color is blue</p>
        <p *ngSwitchCase="'green'">THis line color is green</p>
        <p *ngSwitchDefault>Invalid color</p>
    </div>
    <ul>
        <li *ngFor="let color of colors">{{ color }}</li>
    </ul>
    `
})

export class TutorialComponent{
    public showLineIf = false;   

    public color = "bldsd"; 

    public colors: string[] = ["red", "green", "blue"];
}


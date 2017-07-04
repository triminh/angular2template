"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.showLineIf = false;
        this.color = "bldsd";
        this.colors = ["red", "green", "blue"];
    }
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    core_1.Component({
        selector: 'my-tutorial',
        template: "\n    <h2>{{title}}</h2>\n    <h3 *ngIf=\"showLineIf\">This ngIf directive line.</h3>\n    <div [ngSwitch]=\"color\">\n        <p *ngSwitchCase=\"'red'\">THis line color is red</p>\n        <p *ngSwitchCase=\"'blue'\">THis line color is blue</p>\n        <p *ngSwitchCase=\"'green'\">THis line color is green</p>\n        <p *ngSwitchDefault>Invalid color</p>\n    </div>\n    <ul>\n        <li *ngFor=\"let color of colors\">{{ color }}</li>\n    </ul>\n    "
    }),
    __metadata("design:paramtypes", [])
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map
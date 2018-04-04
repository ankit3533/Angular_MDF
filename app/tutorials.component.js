"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
/*
properties come in [] like you can see style and class mentioned below
events come in () like click event mentioned below
references can be created by #<<some value>> like created for input
to simply refer to a property of a class like to print any var value, use {{property}}
two way data binding means data exchange from view to var declared in class is done by ngModel
structural directives are *ngIf, ngSwitch- *ngSwitchWhen, and *ngFor as shown in examples below
Attribute Directives are shown below wih ngStyle and ngClass
parent component send the data to child component in input and from child back to parent in output as event listener
*/
var TutorialsComponent = /** @class */ (function () {
    function TutorialsComponent() {
        this.title = "Tutorials from Ankit";
        this.imgLink = "http://lorempixel.com/400/200";
        this.applyClass = true;
        this.ngIfCheck = true;
        this.switchColor = "red";
        this.ngForArray = ['red', 'blue', 'green'];
        this.ngClassEx1 = true;
        this.ngClassEx2 = true;
        this.ngStyleStyle = "italic";
        this.ngStyleSize = 30;
        this.childEvent = new core_2.EventEmitter();
    }
    TutorialsComponent.prototype.onchange = function (value) {
        this.childEvent.emit(value);
    };
    TutorialsComponent.prototype.onclick = function (value) {
        console.log(value);
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>{{title}}</h2>\n        <div [class.myclass]=\"applyClass\">attach style class based on parameter example</div>\n        <div [style.color]=\"applyClass?'blue':'yellow'\">Apply class</div>\n        <button [style.color]=\"'blue'\" [id]=\"button1\" (click)=\"onclick(input1.value)\"> Event onclick example capturing #input1 value</button><br>\n        <button [style.color]=\"'red'\" [id]=\"butto1\" (mouseover)=\"onclick($event)\"> Event mouse over example capturing $event</button>\n        <input type=\"text\" #input1/>\n        <input type=\"text\"  [(ngModel)]=\"fname\">\n        <input type=\"text\"  [(ngModel)]=\"lname\">\n        <label>{{fname}} {{lname}}</label>\n        <p *ngIf=\"ngIfCheck\"> show element</p>\n        <div [ngSwitch]=\"switchColor\">\n            <p *ngSwitchWhen=\"'red'\" [style.color]=\"switchColor\"> ngSwitchWhen {{switchColor}} </p>\n            <p *ngSwitchWhen=\"'blue'\"> ngSwitchWhen {{switchColor}}</p>\n            <p *ngSwitchWhen=\"'yellow'\"> ngSwitchWhen {{switchColor}}</p>\n        </div>\n        <ul>\n            <li *ngFor=\"let color of ngForArray\"><label [style.color]=\"color\">hello {{color}}</label></li>\n        </ul>\n        <p [ngClass]=\"{classone:ngClassEx1,classtwo:ngClassEx2}\">ngClass Example</p>\n        <p [ngStyle]=\"{'font-style':ngStyleStyle,'font-size':ngStyleSize}\" >ngStyle example </p>\n        <h2>Child Component</h2>\n        <label>Enter Child component value</label>\n        <input type=\"text\" #childText (keyup)=\"onchange(childText.value)\"/> \n        <p>Value from parent -> {{parentData}}</p>\n\n\n        ",
            styles: [
                ".myclass{ color:red; }\n            .classone{color:black}\n            .classtwo{backgroung-color:yellow}"
            ],
            inputs: ["parentData"],
            outputs: ["childEvent"]
        })
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map
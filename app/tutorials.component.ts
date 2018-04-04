import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

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

@Component(
    {
        selector: 'my-tutorials',
        template: `<h2>{{title}}</h2>
        <div [class.myclass]="applyClass">attach style class based on parameter example</div>
        <div [style.color]="applyClass?'blue':'yellow'">Apply class</div>
        <button [style.color]="'blue'" [id]="button1" (click)="onclick(input1.value)"> Event onclick example capturing #input1 value</button><br>
        <button [style.color]="'red'" [id]="butto1" (mouseover)="onclick($event)"> Event mouse over example capturing $event</button>
        <input type="text" #input1/>
        <input type="text"  [(ngModel)]="fname">
        <input type="text"  [(ngModel)]="lname">
        <label>{{fname}} {{lname}}</label>
        <p *ngIf="ngIfCheck"> show element</p>
        <div [ngSwitch]="switchColor">
            <p *ngSwitchWhen="'red'" [style.color]="switchColor"> ngSwitchWhen {{switchColor}} </p>
            <p *ngSwitchWhen="'blue'"> ngSwitchWhen {{switchColor}}</p>
            <p *ngSwitchWhen="'yellow'"> ngSwitchWhen {{switchColor}}</p>
        </div>
        <ul>
            <li *ngFor="let color of ngForArray"><label [style.color]="color">hello {{color}}</label></li>
        </ul>
        <p [ngClass]="{classone:ngClassEx1,classtwo:ngClassEx2}">ngClass Example</p>
        <p [ngStyle]="{'font-style':ngStyleStyle,'font-size':ngStyleSize}" >ngStyle example </p>
        <h2>Child Component</h2>
        <label>Enter Child component value</label>
        <input type="text" #childText (keyup)="onchange(childText.value)"/> 
        <p>Value from parent -> {{parentData}}</p>


        `,
        styles: [
            `.myclass{ color:red; }
            .classone{color:black}
            .classtwo{backgroung-color:yellow}`
        ],
        inputs:[`parentData`],
        outputs:[`childEvent`]
    }
)

export class TutorialsComponent {
    public title: string = "Tutorials from Ankit";
    public imgLink = "http://lorempixel.com/400/200";
    public applyClass: boolean = true;
    public fname:string;
    public lname:string;
    public ngIfCheck:boolean=true;
    public switchColor:string="red";
    public ngForArray:string[]=['red','blue','green'];
    public ngClassEx1:boolean=true;
    public ngClassEx2:boolean=true;
    public ngStyleStyle:string="italic";
    public ngStyleSize:number=30;
    public parentData:string;
    childEvent = new EventEmitter<string>();
    onchange(value){
        this.childEvent.emit(value); 
    }

    onclick(value) {
        console.log(value);
    }
} 
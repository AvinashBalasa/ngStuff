import { Component, OnInit } from "@angular/core";
import { AirLineService } from './AirLineService';


@Component({
    template:`<h1 align="center" style="color:blue"> Flights for Today are : </h1>
    <div>
    <table border="2">
    <tr>
    <th>Flight No</th>
    <th>Departure</th>
    <th>Arrival</th>
    <th>Duration</th>
    <th>Price</th>
    </tr>
    <tr *ngFor="let f of flights">
    <td><a [routerLink]="['/airlines/',f.fid]">{{f.fid}}</a></td>
    <td>{{f.dep}}</td>
    <td>{{f.arr}}</td>
    <td>{{f.dura}}</td>
    <td>{{f.price}}</td>
    </tr>
    </table>
    <router-outlet></router-outlet>
    </div>

    `
})
export class AirLinesComponent {
   
    constructor(private airServ:AirLineService) {}
    flights = []
    ngOnInit(){
        this.flights=this.airServ.getData()   
}
}
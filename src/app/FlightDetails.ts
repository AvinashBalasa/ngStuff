import { Component, OnInit } from "@angular/core";
import {ActivatedRoute } from "@angular/router";
import { AirLineService } from './AirLineService';
import { AirLinesComponent } from './AirLinesComponent';
@Component({
    template:`<h1 > FlightDetails Component </h1>
    <div>
   
    <h4> Customer Details of Customer Id: {{f_id}}</h4>
    <table >
    
    <tbody>
    <tr>
    <td >Flight No</td>
    <td >{{f_obj.fid}}</td>
    </tr>
    <tr>
    <td >Price</td>
    <td >{{f_obj.price}}</td>
    </tr>
    <tr>
    <td >from {{f_obj.dep}} </td>
    <td >to {{f_obj.arr}}</td>
    </tr>
    <tr>
    <td >duration </td>
    <td >{{f_obj.dura}}</td>
    </tr>
    </tbody>
    </table>
    </div>
    
    `
})

export class FlightDetails implements OnInit {
   
  
constructor(private actRoute:ActivatedRoute,private airServ:AirLineService){
    
}
public f_id : string;
public f_obj : AirLinesComponent;
ngOnInit() {
    this.actRoute.params.subscribe( params => {
        this.f_id = params['id']; 
        this.f_obj = this.airServ.getFlightById(this.f_id); // retrieving the flight details
   
})
}
}

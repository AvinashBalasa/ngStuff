import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AirLineService {
  flight:any
  constructor() { }
  
  flightData=[
    {fid:"AY-123",dep:"MAA",arr:"BLR",dura:"1h0m",price:"$500"},
    {fid:"AY-163",dep:"HYD",arr:"DEL",dura:"1h30m",price:"$600"},
    {fid:"AY-823",dep:"BOM",arr:"BZA",dura:"1h45m",price:"$700"},
    {fid:"AY-983",dep:"MAA",arr:"HYD",dura:"2h0m",price:"$560"},
    {fid:"AY-126",dep:"CCU",arr:"PNQ",dura:"1h15m",price:"$300"},
    {fid:"AY-148",dep:"PNQ",arr:"BLR",dura:"2h300m",price:"$600"},
    {fid:"AY-673",dep:"BOM",arr:"HYD",dura:"2h0m",price:"$500"},
    {fid:"AY-345",dep:"PNQ",arr:"BZA",dura:"1h0m",price:"$440"},
    {fid:"AY-103",dep:"DEL",arr:"MAA",dura:"2h40m",price:"$900"},
    
  ]

getData(){
  return this.flightData;
}
getFlightById(flight_id:string) {
  for(let i=0;i<this.flightData.length;i++) {
  if (this.flightData[i].fid==flight_id){
  this.flight = this.flightData[i];
  return this.flight;
  }
  }
  }
}

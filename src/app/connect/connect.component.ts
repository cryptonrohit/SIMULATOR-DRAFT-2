import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
showbutton:boolean=false;

  childsubtenantidvalue: boolean;

  connectionValue:string = 'Connect';
  chargerid:string="";
  chargeridvalue:boolean=false;
  show:boolean=false;

  constructor(private route:Router) { }

  ngOnInit() {
  }

onSelected(event)
{
  this.showbutton = event 
}

onClickConnect(){
  this.show = true;
}

onClickDisconnect(){
  this.show = false;
}

chargeId(){
  this.chargerid.length != 0? this.chargeridvalue = true : this.chargeridvalue = false;
}

  

}

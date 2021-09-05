import { Component, OnInit } from '@angular/core';
import { machine } from 'src/Model/machine';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  m:machine[]=[];
  flageDetails=false
  Group:number = 1;
  machineSelect:number
  constructor(private ser:ApiService) { }

  ngOnInit(): void {
    this.ul();
    
  }


  Gimor(){
    this.ser.GetAllEmployees().subscribe(s => {
     document.getElementById("ul").style.backgroundColor="rgb(253, 175, 7)";
     document.getElementById("mantin").style.backgroundColor="rgb(253, 175, 7)";
     document.getElementById("Gimor").style.backgroundColor="#e2a758fa";
         this.m = s
           this.m = this.m.filter(a => a.PortGroup == "3"&& a.MacheineNumber!=0); 
           this.sortResults('MacheineNumber', true);    
       }) 
       
       this.Group=2;
   
     }



  ul(){
 this.ser.GetAllEmployees().subscribe(s => {
  document.getElementById("ul").style.backgroundColor="#e2a758fa";
  document.getElementById("mantin").style.backgroundColor="rgb(253, 175, 7)";
  document.getElementById("Gimor").style.backgroundColor="rgb(253, 175, 7)";
      this.m = s
      
        this.m = this.m.filter(a => a.PortGroup == "1"&& a.MacheineNumber!=0); 
        this.sortResults('MacheineNumber', true);    
    }) 
    this.Group=1;

  }
 mantin(){
  this.ser.GetAllEmployees().subscribe(s => {
  document.getElementById("ul").style.backgroundColor="rgb(253, 175, 7)";
  document.getElementById("mantin").style.backgroundColor="#e2a758fa";
  document.getElementById("Gimor").style.backgroundColor="rgb(253, 175, 7)";
  this.m = s
  this.m = this.m.filter(a => a.PortGroup == "2" && a.MacheineNumber!=0);
  this.sortResults('MacheineNumber', true);   
  
})

this.Group=3; 
 }


 scroll(id) {
  console.log(`Location${id}`);
  let el = document.getElementById(`Location${id}`);
  el.scrollIntoView();
}
GetStutos(stat){
  if (stat) {
    return ('- מאושר');
} else {
    return ('');
}

}

 sortResults(prop, asc) {
  this.m .sort(function(a, b) {
      if (asc) {
          return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
          return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
  });}
 
  Details(x){
   
    this.machineSelect=x;
    this.flageDetails = true;
    document.getElementById("body").style.opacity='7%';

}
topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


ChangeFlageFalse(){
  this.flageDetails = false;
  document.getElementById("body").style.opacity='100%';
  document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
}

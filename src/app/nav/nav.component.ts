import { Component, OnInit } from '@angular/core';
import { machine } from 'src/Model/machine';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  m:machine[]=[]
  constructor(private ser:ApiService) { }

  ngOnInit(): void {
    this.ul();
  }


  Gimor(){
    this.ser.GetAllEmployees().subscribe(s => {
     document.getElementById("ul").style.backgroundColor="rgb(196, 131, 10)";
     document.getElementById("mantin").style.backgroundColor="rgb(196, 131, 10)";
     document.getElementById("Gimor").style.backgroundColor="#fdaf07";
         this.m = s
           this.m = this.m.filter(a => a.PortGroup == "3"&& a.MacheineNumber!=0); 
           this.sortResults('MacheineNumber', true);    
       }) 
       
   
     }



  ul(){
 this.ser.GetAllEmployees().subscribe(s => {
  document.getElementById("ul").style.backgroundColor="#fdaf07";
  document.getElementById("mantin").style.backgroundColor="rgb(196, 131, 10)";
  document.getElementById("Gimor").style.backgroundColor="rgb(196, 131, 10)";
      this.m = s
      
        this.m = this.m.filter(a => a.PortGroup == "1"&& a.MacheineNumber!=0); 
        this.sortResults('MacheineNumber', true);    
    }) 
    

  }
 mantin(){
  this.ser.GetAllEmployees().subscribe(s => {
  document.getElementById("ul").style.backgroundColor="rgb(196, 131, 10)";
  document.getElementById("mantin").style.backgroundColor="#fdaf07";
  document.getElementById("Gimor").style.backgroundColor="rgb(196, 131, 10)";
  this.m = s
  this.m = this.m.filter(a => a.PortGroup == "2" && a.MacheineNumber!=0);
  this.sortResults('MacheineNumber', true);   
  
})

   
 }


 scroll(id) {
  console.log(`Location${id}`);
  let el = document.getElementById(`Location${id}`);
  el.scrollIntoView();
}
 

 sortResults(prop, asc) {
  this.m .sort(function(a, b) {
      if (asc) {
          return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
          return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
  });}
 


}

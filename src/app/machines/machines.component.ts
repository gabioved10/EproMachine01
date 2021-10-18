import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { machine } from 'src/Model/machine';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  m: machine[] = [];
  mAll:machine[]=[];
  flageDetails = false;
  flagnextproduct = false;
  Group: number = 1;
  machineSelect: number
  postId;
  constructor(private ser: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    
    this.ul();

  }


  Gimor() {
    this.ser.GetAllEmployees().subscribe(s => {
      document.getElementById("ul").style.backgroundColor = "#e2a758fa";
      document.getElementById("mantin").style.backgroundColor = "#e2a758fa";
      document.getElementById("Gimor").style.backgroundColor = "rgb(253, 175, 7)";
      this.m = s
      this.m = this.m.filter(a => a.PortGroup == "3" && a.MacheineNumber != 0 && a.PortStatus != 0);
      this.sortResults('MacheineNumber', true);
    })

    this.Group = 2;

  }



  ul() {
    this.ser.GetAllEmployees().subscribe(s => {
      this.m = s
      this.mAll=s
      this.m = this.m.filter(a => a.PortGroup == "1" && a.MacheineNumber != 0 && a.PortStatus != 0);
     
      // console.log(this.m)
      this.sortResults('MacheineNumber', true);
      document.getElementById("ul").style.backgroundColor = "rgb(253, 175, 7)";
      document.getElementById("mantin").style.backgroundColor = "#e2a758fa";
      document.getElementById("Gimor").style.backgroundColor = "#e2a758fa";
    })
    this.Group = 1;

  }
  mantin() {
    this.ser.GetAllEmployees().subscribe(s => {
      document.getElementById("ul").style.backgroundColor = "#e2a758fa";
      document.getElementById("mantin").style.backgroundColor = "rgb(253, 175, 7)";
      document.getElementById("Gimor").style.backgroundColor = "#e2a758fa";
      this.m = s
      this.m = this.m.filter(a => a.PortGroup == "2" && a.MacheineNumber != 0 && a.PortStatus != 0);
      this.sortResults('MacheineNumber', true);

    })

    this.Group = 3;
  }


  scroll(id) {
    
    console.log(`Location${id}`);
    let el = document.getElementById(`Location${id}`);
    el.scrollIntoView();
  }
  GetStutos(stat) {
    if (stat) {
      return ('- מאושר');
    } else {
      return ('');
    }

  }

  sortResults(prop, asc) {
    this.m.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  Details(x) {
    
    this.machineSelect = x;
    this.flagnextproduct = false;
    this.flageDetails = true;
    document.getElementById("body").style.opacity = '7%';

  }

  nextproduct(x) {
    this.machineSelect = x;
    this.flageDetails = false;
    this.flagnextproduct = true;
    document.getElementById("body").style.opacity = '7%';
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  ChangeFlageFalse(Nm) {
    
    this.flageDetails = false;
    this.flagnextproduct = false;
    document.getElementById("body").style.opacity = '100%';
    this.scroll(Nm);
    //document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;

  }


  DownInstruction(nummachine,i) {

    let person = prompt("הכנס סיסמא :");
    
    if (person == "2018") {
      let today = new Date();
      const headers = { 'Content-Type': 'application/json' };

      
        
     
      
      this.callPatchData(this.GetIdNumber(nummachine));
      const body = {
        "Machine": nummachine,
        "TriggerDate": today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2),
        "TriggerTime": today.getHours() + ":" + today.getMinutes() + ":" + ("0" + (today.getSeconds() + 1)).slice(-2),
        "workorderGoingDown": this.m[i].Instruction,
        "workorderGoingDownByUser": 0,
        "workorderGoingDownDateTime": 0,
        "workorderGoingUp": this.m[i].NextWorkorder, 
        "apiKey": 0
      };

      this.http.post<any>('https://epro-f862b-default-rtdb.firebaseio.com/DownInstruction.json', body, { headers }).subscribe(data => {
        this.postId = data.id;
      });
     
    }

    else {
      alert("סיסמא שגויה")
    }

  }

  UpInstruction(nummachine,i) {
    let person = prompt("הכנס סיסמא :");
    if (person == "2018") {


      let today = new Date();
      const headers = { 'Content-Type': 'application/json' };
      
      this.callPatchData(this.GetIdNumber(nummachine));
      const body = {
        "Machine": nummachine,
        "TriggerDate": today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2),
        "TriggerTime": today.getHours() + ":" + today.getMinutes() + ":" + ("0" + (today.getSeconds() + 1)).slice(-2),
        "workorderGoingDown": this.m[i].Instruction,
        "workorderGoingDownByUser": 0,
        "workorderGoingDownDateTime": 0,
        "workorderGoingUp": this.m[i].NextWorkorder, 
        "apiKey": 0
      };

      this.http.post<any>('https://epro-f862b-default-rtdb.firebaseio.com/UpInstruction.json', body, { headers }).subscribe(data => {
        this.postId = data.id;
      });

      
    }

    else {
      alert("סיסמא שגויה")
    }

  }

  

  ApproveProduct(nummachine,i) {

    let person = prompt("הכנס סיסמא :");
    if (person == "2018") {

      let today = new Date();
      debugger;
      this.callPatchData(this.GetIdNumber(nummachine));
      const headers = { 'Content-Type': 'application/json' };
      const body = {
        "Machine": nummachine,
        "TriggerDate": today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2),
        "TriggerTime": today.getHours() + ":" + today.getMinutes() + ":" + ("0" + (today.getSeconds() + 1)).slice(-2),
        "workorderGoingDown": this.m[i].Instruction,
        "workorderGoingDownByUser": 0,
        "workorderGoingDownDateTime": 0,
        "workorderGoingUp": this.m[i].Instruction, 
        "apiKey": 0
      };

      this.http.post<any>('https://epro-f862b-default-rtdb.firebaseio.com/ProductApproval.json', body, { headers }).subscribe(data => {
        this.postId = data.id;
      });
    }

    else {
      alert("סיסמא שגויה")
    }




  }


  callPatchData(i:number){
   
    this.ser.PatchData(i).subscribe(() =>{this.ul();})
  }


  GetIdNumber(nummachine)
  {for (let index = 0; index < this.mAll.length; index++) {
    if(this.mAll[index].MacheineNumber==nummachine){
     return index;
    }
  
  }
  return null;}

}

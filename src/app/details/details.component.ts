import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { machine } from 'src/Model/machine';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Output() dataToParent2 = new EventEmitter
  @Input() numberMachine;
  machine: machine[]=[];
  
  constructor(private ser: ApiService) { }


  ul() {
    this.ser.GetAllEmployees().subscribe(s => {
      
      this.machine = s.filter(a => a.PortGroup == "1" && a.MacheineNumber==this.numberMachine);
      console.log(this.machine[0].MacheineNumber)
    })


  }

  ngOnInit(): void {
    this.ul() 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  close() {
    this.dataToParent2.emit();
  }

}

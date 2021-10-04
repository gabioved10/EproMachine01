import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { machine } from 'src/Model/machine';

@Component({
  selector: 'app-next-product',
  templateUrl: './next-product.component.html',
  styleUrls: ['./next-product.component.scss']
})
export class NextProductComponent implements OnInit {




  @Output() dataToParent2 = new EventEmitter
  @Input() numberMachine;
  machine: machine[] = [];

  constructor(private ser: ApiService) { }


  ul() {
    this.ser.GetAllEmployees().subscribe(s => {

      this.machine = s.filter(a => a.PortGroup == "1" && a.MacheineNumber == this.numberMachine);
      console.log(this.machine[0].MacheineNumber)
    })


  }

  ngOnInit(): void {
    this.ul()
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  close() {
    this.dataToParent2.emit(this.numberMachine);
  }


  stringToBoolean(str){
    
    switch(str){
      case true: case "yes": case "1":  return "כן";break;
      case false: case "no": case "0": case null: return "לא";break;
        
    }
}



}

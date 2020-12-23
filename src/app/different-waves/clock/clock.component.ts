import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  clockArray:number[]=[100];
  constructor() { 
    while(this.clockArray[this.clockArray.length-1]!==1700){
      this.clockArray.push(this.clockArray[this.clockArray.length-1]+100);
    }
  }

  ngOnInit(): void {
  }

}

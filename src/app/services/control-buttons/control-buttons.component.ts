import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlSignalsService } from '../control-signals.service';
import { SignalDataServicesService } from '../signal-data-services.service';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.css']
})
export class ControlButtonsComponent implements OnInit, OnDestroy {

  @Input('name') name: string;
  waiting: boolean = false;
  showButton: string = 'Show All'

  subs: Subscription;
  constructor(private control: ControlSignalsService, private signalService: SignalDataServicesService) { }


  ngOnInit(): void {
    this.subs = this.control.waiting.subscribe(waiting => {
      this.waiting = waiting;
    })
    this.onForward();
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  onRestartAll() {
    this.control.restartAll.next(true);

  }
  onForward() {
    this.signalService.addSignal();
  }
  onBackward() {
    this.signalService.removeSignal();
 
  }
  showOrHide() {
    if (this.showButton === 'Show All') {
      for (let i = 0; i < 7; i++) {
        this.onForward();
      }
      this.showButton="Hide All";
    }else{
      for (let i = 0; i < 7; i++) {
        this.onBackward();
      }
      this.showButton="Show All";
    }
  }

}

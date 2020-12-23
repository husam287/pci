import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlSignalsService } from '../../services/control-signals.service';
import { SignalDataServicesService } from '../../services/signal-data-services.service';

@Component({
  selector: 'app-read-scenrio',
  templateUrl: './read-scenrio.component.html',
  styleUrls: ['./read-scenrio.component.css'],
  providers:[SignalDataServicesService]
})
export class ReadScenrioComponent implements OnInit,OnDestroy {

  signals=[];

  subs:Subscription;
  constructor(private control:ControlSignalsService,private signalService:SignalDataServicesService) { }

  ngOnInit(): void {
    this.subs=this.signalService.signalsArrayObserver
    .subscribe(signals=>{
      this.signals=signals;
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
  


}

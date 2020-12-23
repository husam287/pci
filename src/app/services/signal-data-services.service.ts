import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalDataServicesService {
  signals = [];

  privateCounter = 0;

  signalsArrayObserver = new Subject<String[]>();

  constructor() { }

  addSignal() {
    if (this.privateCounter < 7) {
      this.privateCounter++;
      switch (this.privateCounter) {
        case 1:
          this.signals.push('frame');
          break;
        case 2:
          this.signals.push('irdy');
          break;
        case 3:
          this.signals.push('ad');
          break;
        case 4:
          this.signals.push('cbe');
          break;
        case 5:
          this.signals.push('trdy');
          break;
        case 6:
          this.signals.push('devsel');
          break;
        case 7:
          this.signals.push('clk');
          break;
        default:
          break;
      }
      this.signalsArrayObserver.next(this.signals);

    }
  }

  removeSignal(){
    if(this.privateCounter>0){
      this.signals.pop();
      this.privateCounter--;
      this.signalsArrayObserver.next(this.signals)
    }
  }
}

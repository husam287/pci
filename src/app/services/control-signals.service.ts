import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlSignalsService {

  restartAll = new BehaviorSubject<boolean>(false);
  waiting = new Subject<boolean>();


  

  constructor() { }

  


}

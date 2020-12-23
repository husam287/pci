import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlSignalsService } from '../../services/control-signals.service';

@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.css']
})
export class WaveComponent implements OnInit,AfterViewInit,OnDestroy {

  @ViewChild('canvas',{static:false}) myCanvas:ElementRef<HTMLCanvasElement>;

  @Input('color') color:string='#FF0000';
  @Input('inverts') inverts:number[]=[500];
  @Input('startHigh') startHigh=true;
  @Input('name') name:string='Not set';
  @Input('delay') delay:number=10;

  @ViewChild('restartButton',{static:false}) restartButton:ElementRef<HTMLElement>;
  signals=[];
  subs:Subscription;

  canRestart=false;
  public context:CanvasRenderingContext2D;

  constructor(private control:ControlSignalsService) { }

  ngOnInit(): void {
   
  }

  ngOnDestroy(){
    this.subs.unsubscribe();

  }

  // <!-- 50 point is 1 unit in grid -->
  // <!-- width 1750 hight 51 -->
  ngAfterViewInit(){
    this.autoRestart();
    this.draw();
  }

  private async draw(){

    this.canRestart=false;
    this.control.waiting.next(true);

    this.myCanvas.nativeElement.width=1750;
    this.myCanvas.nativeElement.height=51;
    this.context = this.myCanvas.nativeElement.getContext('2d');

    //drawing
    this.context.strokeStyle=this.color
    this.context.beginPath();

    if(this.startHigh) this.context.moveTo(0,0);
    else this.context.moveTo(0,50);
    
    let revertValue = !this.startHigh;

    const inverts = [0,...this.inverts]; //Make a new modified array

    //Go on the array
    for(let j=0;j<inverts.length-1;j++) {
      revertValue = !revertValue;
      //Go right
      for (let i = inverts[j]; i <= inverts[j+1]; i+=10) {
        if(revertValue) this.context.lineTo(i,0);
        else this.context.lineTo(i,50);
        this.context.stroke();
        await this.sleep(this.delay);
      }
      //Go down or up
      for (let i = 0; i <=51; i+=10) {
        if(revertValue) this.context.lineTo(inverts[j+1],i);
        else this.context.lineTo(inverts[j+1],-i);
        this.context.stroke();
        
      }
    };

    //Continoue to the end
    for (let i = inverts[inverts.length-1]; i <= 1750; i+=10) {
      if(revertValue) this.context.lineTo(i,50);
      else this.context.lineTo(i,0);
      this.context.stroke();
      await this.sleep(this.delay);
    }

    this.canRestart=true;
    this.control.waiting.next(false);
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  restart(){
    this.draw();
  }

  private autoRestart(){
    this.subs =this.control.restartAll.subscribe(restart=>{
      if(restart) {
        this.restart();
        this.control.restartAll.next(false);
      }
    })
  }


}

import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlSignalsService } from 'src/app/services/control-signals.service';

@Component({
  selector: 'app-data-waves',
  templateUrl: './data-waves.component.html',
  styleUrls: ['./data-waves.component.css']
})
export class DataWavesComponent implements OnInit {
  @ViewChild('canvas', { static: false }) myCanvas: ElementRef<HTMLCanvasElement>;

  @Input('color') color: string = '#FF0000';
  @Input('inverts') inverts: number[] = [500];
  @Input('name') name: string = 'Not set';
  @Input('delay') delay: number = 10;

  @ViewChild('restartButton', { static: false }) restartButton: ElementRef<HTMLElement>;
  signals = [];
  subs: Subscription;

  canRestart = false;
  public context: CanvasRenderingContext2D;
  constructor(private control: ControlSignalsService) { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subs.unsubscribe();

  }

  // <!-- 50 point is 1 unit in grid -->
  // <!-- width 1750 hight 51 -->
  ngAfterViewInit() {
    this.autoRestart();
    this.draw();
  }

  private async draw() {

    this.canRestart = false;
    this.control.waiting.next(true);

    this.myCanvas.nativeElement.width = 1750;
    this.myCanvas.nativeElement.height = 51;
    this.context = this.myCanvas.nativeElement.getContext('2d');

    //drawing
    this.context.strokeStyle = this.color;
    this.context.beginPath();

    this.context.moveTo(0, 25);

    const inverts = [0, ...this.inverts, 1750]; //Make a new modified array



    for (let i = 0; i < inverts.length - 1; i++) {
      for (let j = inverts[i]; j <= inverts[i + 1]; j+=10) {
        this.context.moveTo(inverts[i],25);
        if (i % 2 === 0) {
          this.context.lineTo(j, 25);
          await this.sleep(this.delay);
        }

        else {
          await this.sleep(this.delay);
          this.context.rect(inverts[i], 0, inverts[i + 1] - inverts[i], 51);
          this.context.stroke();
          continue;
        }
        this.context.stroke();

      }
    }




    this.canRestart = true;
    this.control.waiting.next(false);
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  restart() {
    this.draw();
  }

  private autoRestart() {
    this.subs = this.control.restartAll.subscribe(restart => {
      if (restart) {
        this.restart();
        this.control.restartAll.next(false);
      }
    })
  }

}

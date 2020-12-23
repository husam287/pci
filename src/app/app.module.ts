import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaveComponent } from './different-waves/wave/wave.component';
import { ClockComponent } from './different-waves/clock/clock.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WriteScenrioComponent } from './different-scenrioes/write-scenrio/write-scenrio.component';
import { ReadScenrioComponent } from './different-scenrioes/read-scenrio/read-scenrio.component';
import { WrongAddressComponent } from './different-scenrioes/wrong-address/wrong-address.component';
import { ControlButtonsComponent } from './services/control-buttons/control-buttons.component';
import { DataWavesComponent } from './different-waves/data-waves/data-waves.component';

@NgModule({
  declarations: [
    AppComponent,
    WaveComponent,
    ClockComponent,
    NavbarComponent,
    WriteScenrioComponent,
    ReadScenrioComponent,
    WrongAddressComponent,
    ControlButtonsComponent,
    DataWavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

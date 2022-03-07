import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { PlanBPocetnaComponent } from './components/plan-b-pocetna/plan-b-pocetna.component';
import { HeaderComponent } from './components/header/header.component';
import { DonerPocetnaComponent } from './components/doner-pocetna/doner-pocetna.component';
import { KafanaPocetnaComponent } from './components/kafana-pocetna/kafana-pocetna.component';
import { TopliNapiciComponent } from './components/Meniji/topli-napici/topli-napici.component';
import { PrirodniSokoviComponent } from './components/Meniji/prirodni-sokovi/prirodni-sokovi.component';
import { GaziraniNapiciComponent } from './components/Meniji/gazirani-napici/gazirani-napici.component';
import { EnergetskiNapiciComponent } from './components/Meniji/energetski-napici/energetski-napici.component';
import { PivoComponent } from './components/Meniji/pivo/pivo.component';
import { AlkoholnaPicaComponent } from './components/Meniji/alkoholna-pica/alkoholna-pica.component';
import { VinoComponent } from './components/Meniji/vino/vino.component';
import { VinoTocenoComponent } from './components/Meniji/vino-toceno/vino-toceno.component';
import { TopliNapiciKafanaComponent} from "./components/Meniji-Kafana/topli-napici-kafana/topli-napici-kafana.component";
import {
  PrirodniSokoviKafanaComponent
} from "./components/Meniji-Kafana/prirodni-sokovi-kafana/prirodni-sokovi-kafana.component";
import {
  GaziraniNapiciKafanaComponent
} from "./components/Meniji-Kafana/gazirani-napici-kafana/gazirani-napici-kafana.component";
import {
  EnergetskiNapiciKafanaComponent
} from "./components/Meniji-Kafana/energetski-napici-kafana/energetski-napici-kafana.component";
import {PivoKafanaComponent} from "./components/Meniji-Kafana/pivo-kafana/pivo-kafana.component";
import {
  AlkoholnaPicaKafanaComponent
} from "./components/Meniji-Kafana/alkoholna-pica-kafana/alkoholna-pica-kafana.component";
import {VinoKafanaComponent} from "./components/Meniji-Kafana/vino-kafana/vino-kafana.component";
import {VinoTocenoKafanaComponent} from "./components/Meniji-Kafana/vino-toceno-kafana/vino-toceno-kafana.component";
import { SpecijalnaPonudaComponent } from './components/Meniji/specijalna-ponuda/specijalna-ponuda.component';
import { SpecijalnaPonudaKafanaComponent } from './components/Meniji-Kafana/specijalna-ponuda-kafana/specijalna-ponuda-kafana.component';
import { HranaComponent } from './components/Meniji-Doner/hrana/hrana.component';
import { PiceComponent } from './components/Meniji-Doner/pice/pice.component';
import { SpecijalnaPonudaDonerComponent } from './components/Meniji-Doner/specijalna-ponuda-doner/specijalna-ponuda-doner.component';
import { NargilaComponent } from './components/Meniji/nargila/nargila.component';
import { NargilaKafanaComponent } from './components/Meniji-Kafana/nargila-kafana/nargila-kafana.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranicaComponent,
    PlanBPocetnaComponent,
    HeaderComponent,
    DonerPocetnaComponent,
    KafanaPocetnaComponent,
    TopliNapiciComponent,
    PrirodniSokoviComponent,
    GaziraniNapiciComponent,
    EnergetskiNapiciComponent,
    PivoComponent,
    AlkoholnaPicaComponent,
    VinoComponent,
    VinoTocenoComponent,
    TopliNapiciKafanaComponent,
    PrirodniSokoviKafanaComponent,
    GaziraniNapiciKafanaComponent,
    EnergetskiNapiciKafanaComponent,
    PivoKafanaComponent,
    AlkoholnaPicaKafanaComponent,
    VinoKafanaComponent,
    VinoTocenoKafanaComponent,
    SpecijalnaPonudaComponent,
    SpecijalnaPonudaKafanaComponent,
    HranaComponent,
    PiceComponent,
    SpecijalnaPonudaDonerComponent,
    NargilaComponent,
    NargilaKafanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

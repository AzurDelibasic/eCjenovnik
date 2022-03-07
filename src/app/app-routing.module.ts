import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PocetnaStranicaComponent} from "./components/pocetna-stranica/pocetna-stranica.component";
import {PlanBPocetnaComponent} from "./components/plan-b-pocetna/plan-b-pocetna.component";
import {DonerPocetnaComponent} from "./components/doner-pocetna/doner-pocetna.component";
import {KafanaPocetnaComponent} from "./components/kafana-pocetna/kafana-pocetna.component";
import {TopliNapiciComponent} from "./components/Meniji/topli-napici/topli-napici.component";
import {PrirodniSokoviComponent} from "./components/Meniji/prirodni-sokovi/prirodni-sokovi.component";
import {GaziraniNapiciComponent} from "./components/Meniji/gazirani-napici/gazirani-napici.component";
import {EnergetskiNapiciComponent} from "./components/Meniji/energetski-napici/energetski-napici.component";
import {PivoComponent} from "./components/Meniji/pivo/pivo.component";
import {AlkoholnaPicaComponent} from "./components/Meniji/alkoholna-pica/alkoholna-pica.component";
import {VinoComponent} from "./components/Meniji/vino/vino.component";
import {VinoTocenoComponent} from "./components/Meniji/vino-toceno/vino-toceno.component";
import {TopliNapiciKafanaComponent} from "./components/Meniji-Kafana/topli-napici-kafana/topli-napici-kafana.component";
import {PrirodniSokoviKafanaComponent} from "./components/Meniji-Kafana/prirodni-sokovi-kafana/prirodni-sokovi-kafana.component";
import {GaziraniNapiciKafanaComponent} from "./components/Meniji-Kafana/gazirani-napici-kafana/gazirani-napici-kafana.component";
import {EnergetskiNapiciKafanaComponent} from "./components/Meniji-Kafana/energetski-napici-kafana/energetski-napici-kafana.component";
import {PivoKafanaComponent} from "./components/Meniji-Kafana/pivo-kafana/pivo-kafana.component";
import {AlkoholnaPicaKafanaComponent} from "./components/Meniji-Kafana/alkoholna-pica-kafana/alkoholna-pica-kafana.component";
import {VinoKafanaComponent} from "./components/Meniji-Kafana/vino-kafana/vino-kafana.component";
import {VinoTocenoKafanaComponent} from "./components/Meniji-Kafana/vino-toceno-kafana/vino-toceno-kafana.component";
import {SpecijalnaPonudaComponent} from "./components/Meniji/specijalna-ponuda/specijalna-ponuda.component";
import {
  SpecijalnaPonudaKafanaComponent
} from "./components/Meniji-Kafana/specijalna-ponuda-kafana/specijalna-ponuda-kafana.component";
import {HranaComponent} from "./components/Meniji-Doner/hrana/hrana.component";
import {PiceComponent} from "./components/Meniji-Doner/pice/pice.component";
import {
  SpecijalnaPonudaDonerComponent
} from "./components/Meniji-Doner/specijalna-ponuda-doner/specijalna-ponuda-doner.component";
import {NargilaComponent} from "./components/Meniji/nargila/nargila.component";
import {NargilaKafanaComponent} from "./components/Meniji-Kafana/nargila-kafana/nargila-kafana.component";

const routes: Routes = [
  {path: 'pocetna-pjk', component: PocetnaStranicaComponent},
  {path: 'plan-b', component: PlanBPocetnaComponent},
  {path: 'doner-joker', component: DonerPocetnaComponent},
  {path: 'kafana-jedno-mjesto', component: KafanaPocetnaComponent},
  {path: 'plan-b/topli-napici', component: TopliNapiciComponent},
  {path: 'plan-b/prirodni-sokovi', component: PrirodniSokoviComponent},
  {path: 'plan-b/gazirani-napici', component: GaziraniNapiciComponent},
  {path: 'plan-b/energetski-napici', component: EnergetskiNapiciComponent},
  {path: 'plan-b/pivo', component: PivoComponent},
  {path: 'plan-b/alkoholna-pica', component: AlkoholnaPicaComponent},
  {path: 'plan-b/vino', component: VinoComponent},
  {path: 'plan-b/vino-toceno', component: VinoTocenoComponent},
  {path: 'kafana-jedno-mjesto/topli-napici-kafana', component: TopliNapiciKafanaComponent},
  {path: 'kafana-jedno-mjesto/prirodni-sokovi-kafana', component: PrirodniSokoviKafanaComponent},
  {path: 'kafana-jedno-mjesto/gazirani-napici-kafana', component: GaziraniNapiciKafanaComponent},
  {path: 'kafana-jedno-mjesto/energetski-napici-kafana', component: EnergetskiNapiciKafanaComponent},
  {path: 'kafana-jedno-mjesto/pivo-kafana', component: PivoKafanaComponent},
  {path: 'kafana-jedno-mjesto/alkoholna-pica-kafana', component: AlkoholnaPicaKafanaComponent},
  {path: 'kafana-jedno-mjesto/vino-kafana', component: VinoKafanaComponent},
  {path: 'kafana-jedno-mjesto/vino-toceno-kafana', component: VinoTocenoKafanaComponent},
  {path: 'plan-b/specijalna-ponuda', component: SpecijalnaPonudaComponent},
  {path: 'kafana-jedno-mjesto/specijalna-ponuda-kafana', component: SpecijalnaPonudaKafanaComponent},
  {path: 'doner-joker/hrana', component: HranaComponent},
  {path: 'doner-joker/pice', component: PiceComponent},
  {path: 'doner-joker/specijalna-ponuda-doner', component: SpecijalnaPonudaDonerComponent},
  {path: 'plan-b/nargila', component: NargilaComponent},
  {path: 'kafana-jedno-mjesto/nargila', component: NargilaKafanaComponent},
  {path: '', redirectTo:'pocetna-pjk', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[
  PocetnaStranicaComponent,
  PlanBPocetnaComponent,
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
]

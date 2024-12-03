import { Routes } from '@angular/router';
import {AdherentComponent} from './component/adherent/adherent.component';
import {ActiviteComponent} from './component/activite/activite.component';

export const routes: Routes = [
  {
    path: 'adherent',
    title: 'Nos adherent',
    component: AdherentComponent,
  },
  {
    path: 'activite',
    title: 'activite',
    component: ActiviteComponent,
  },
];

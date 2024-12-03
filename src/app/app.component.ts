import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ActiviteComponent} from './component/activite/activite.component';
import {AdherentComponent} from './component/adherent/adherent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActiviteComponent, AdherentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '93 moove';
  date = new Date();
}

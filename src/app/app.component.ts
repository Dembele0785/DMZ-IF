import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {ActiviteComponent} from './component/activite/activite.component';
import {AdherentComponent} from './component/adherent/adherent.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActiviteComponent, AdherentComponent, MatToolbar, MatSidenavContainer, MatNavList, MatListItem, MatSidenav, MatIcon, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '93 moove';
  date = new Date();
}

import {Component, OnInit} from '@angular/core';
import {ActiviteService} from '../../services/activite.service';
import {Activite} from '../../models/activite.model';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitleGroup,
  MatCardTitle,
  MatCardSubtitle
} from '@angular/material/card';
@Component({
  selector: 'app-activite',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './activite.component.html',
  styleUrl: './activite.component.css'
})
export class ActiviteComponent implements OnInit{

  activite:Activite[]=[];
  constructor(private activiteService: ActiviteService) {
  }
  ngOnInit():void{
    this.activiteService.getActivite().subscribe((data:Activite[])=> {
      this.activite = data;
    });
  }
}

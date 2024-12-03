import {Component, OnInit} from '@angular/core';
import {ActiviteService} from '../../services/activite.service';
import {Activite} from '../../models/activite.model';
@Component({
  selector: 'app-activite',
  standalone: true,
  imports: [],
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

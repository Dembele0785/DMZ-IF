import {Component, OnInit} from '@angular/core';
import {AdherentService} from '../../services/adherent.service';
import {Adherent} from '../../models/adherent.model';


@Component({
  selector: 'app-adherent',
  standalone: true,
  imports: [],
  templateUrl: './adherent.component.html',
  styleUrl: './adherent.component.css'
})
export class AdherentComponent implements OnInit{
  adherent:Adherent[]=[];
  constructor(private adherentService: AdherentService) {
  }
  ngOnInit():void{
    this.adherentService.getAdherent().subscribe((data:Adherent[])=> {
      this.adherent = data;
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../services/cours.service';
import {Cours} from '../../models/cours.model';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit{

  cours:Cours[]=[];
  constructor(private coursService: CoursService) {
  }
  ngOnInit():void{
    this.coursService.getCours().subscribe((data:Cours[])=> {
      this.cours = data;
    });
  }
}


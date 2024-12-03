import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cours} from '../models/cours.model';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:8080/cours';
  constructor(private http: HttpClient) {}
  getCours():Observable<Cours[]>{
    let Cours = this.http.get<Cours[]>(this.apiUrl);
    return Cours;
  }
}

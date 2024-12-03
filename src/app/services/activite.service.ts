import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activite} from '../models/activite.model';
@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  private apiUrl = 'http://localhost:8080/activite';
  constructor(private http: HttpClient) {}
  getActivite():Observable<Activite[]>{
    let Activite = this.http.get<Activite[]>(this.apiUrl);
    return Activite;
  }
}

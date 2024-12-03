import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Adherent} from '../models/adherent.model';


@Injectable({
  providedIn: 'root'
})
export class AdherentService {
  private apiUrl = 'http://localhost:8080/adherent';
  constructor(private http: HttpClient) {}
  getAdherent():Observable<Adherent[]>{
    let Activite = this.http.get<Adherent[]>(this.apiUrl);
    return Activite;
  }
}

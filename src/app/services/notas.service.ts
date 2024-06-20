import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Nota } from '../models/Notas';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotasService {

  API_URI = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  getNotas(){
    return this.http.get(`${this.API_URI}agenda`); 
    }

  getNota(id : string){
    return this.http.get(`${this.API_URI}agenda/${id}`);
    }

   saveNota(nota : Nota){
    return this.http.post(`${this.API_URI}agenda`, nota);
    }

  deleteNota(id : string) {
    return this.http.delete(`${this.API_URI}agenda/${id}`);
    }

  updateNota(id : String | number, updateNota : Nota): Observable<Nota> { 
      return this.http.put(`${this.API_URI}agenda/${id}`,updateNota);
      }

  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
  constructor(private http: HttpClient) { }

  getStates(){
    return this.http.get(this.api)
  }

  getcitiesById(id: number){
    return this.http.get(this.api+'/'+id+'/municipios')
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Capacitacion } from '../model/capacitacion';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {
  //URL = 'http://localhost:8080/capacitacion/';
  URL = 'https://tomassosa-tomasfacundososa.b4a.run/capacitacion/';
  //URL = environment.serverURL + 'capacitacion/';
  constructor(private httpClient : HttpClient) { }


  public lista() : Observable<Capacitacion[]>{
    return this.httpClient.get<Capacitacion[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Capacitacion>{
    return this.httpClient.get<Capacitacion>(this.URL + `detail/${id}`);
  }

  public save(capacitacion: Capacitacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', capacitacion);
  }

  public update(id:number, capacitacion: Capacitacion): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, capacitacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL = 'http://localhost:8080/proyectos/';
  //URL = 'http://tomassosa.fly.dev/proyectos/';
  //URL = 'https://tomassosa-tomasfacundososa.b4a.run/proyectos/';
  //URL = environment.serverURL + 'proyectos/';
  constructor(private httpClient : HttpClient) { }


  public lista() : Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyectos);
  }

  public update(id:number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
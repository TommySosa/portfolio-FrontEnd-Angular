import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  URL = 'http://localhost:8080/educacion/';
  //URL = 'https://tomassosa-tomasfacundososa.b4a.run/educacion/';
  //URL = environment.serverURL + 'educacion/';
  constructor(private httpClient : HttpClient) { }


  public lista() : Observable<Estudios[]>{
    return this.httpClient.get<Estudios[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.URL + `detail/${id}`);
  }

  public save(estudios: Estudios): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', estudios);
  }

  public update(id:number, estudios: Estudios): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, estudios);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

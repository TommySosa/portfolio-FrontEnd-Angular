import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkills } from '../model/hard-skills';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {
  //URL = 'http://localhost:8080/hardskills/';
  URL = 'http://tomassosa.fly.dev/hardskills/';
  constructor(private httpClient : HttpClient) { }

  public lista() : Observable<HardSkills[]>{
    return this.httpClient.get<HardSkills[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<HardSkills>{
    return this.httpClient.get<HardSkills>(this.URL + `detail/${id}`);
  }

  public save(estudios: HardSkills): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', estudios);
  }

  public update(id:number, estudios: HardSkills): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, estudios);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

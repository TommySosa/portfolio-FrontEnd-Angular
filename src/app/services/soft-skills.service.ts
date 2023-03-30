import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SoftSkills } from '../model/soft-skills';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {
  URL = 'http://localhost:8080/softskills/';
  //URL = 'http://tomassosa.fly.dev/softskills/';
  //URL = 'https://tomassosa-tomasfacundososa.b4a.run/softskills/';
  //URL = environment.serverURL + 'softskills/';
  constructor(private httpClient : HttpClient) { }

  public lista() : Observable<SoftSkills[]>{
    return this.httpClient.get<SoftSkills[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<SoftSkills>{
    return this.httpClient.get<SoftSkills>(this.URL + `detail/${id}`);
  }

  public save(softskills: SoftSkills): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', softskills);
  }

  public update(id:number, softskills: SoftSkills): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, softskills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

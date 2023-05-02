import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HardSkills } from '../model/hard-skills';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {
  //URL = 'http://localhost:8080/hardskills/';
  //URL = 'https://tomassosa-tomasfacundososa.b4a.run/hardskills/';
  URL = 'https://portfolio-backend-m1qz.onrender.com/hardskills/';
  //URL = environment.serverURL + 'hardskills/';
  constructor(private httpClient : HttpClient) { }

  public lista() : Observable<HardSkills[]>{
    return this.httpClient.get<HardSkills[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<HardSkills>{
    return this.httpClient.get<HardSkills>(this.URL + `detail/${id}`);
  }

  public save(hardskill: HardSkills): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', hardskill);
  }

  public update(id:number, hardskill: HardSkills): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, hardskill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) {}
  createProject(project: Projects): Observable<any> {
    return this.http.post('http://localhost:5200/project/', project);
  }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>('http://localhost:5200/project/', {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  deleteProject(project_id: string): Observable<any> {
    return this.http.delete(`http://localhost:5200/project/${project_id}`)
   
  }

}

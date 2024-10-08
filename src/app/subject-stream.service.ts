import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectStream } from './entities/subjects';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectStreamService {

  private apiUrl = '/api/Stream'
  constructor(private http: HttpClient) { }
getStrems():Observable<SubjectStream[]>{
  return this.http.get<SubjectStream[]>(this.apiUrl);
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';
import { machine } from 'src/Model/machine';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public flagForDetails = false;
  constructor(private http: HttpClient) { 
    
  }
  GetAllEmployees(): Observable<machine[]> {
    return this.http.get<machine[]>(environment.urlmachine);
  }

  

  
}

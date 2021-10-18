import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';
import { machine } from 'src/Model/machine';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public flagForDetails = false;
  constructor(private http: HttpClient) { 
    
  }
  GetAllEmployees(): Observable<machine[]> {
    return this.http.get<machine[]>(environment.urlmachine);
  }

  PatchData(id:number): Observable<object> {

    console.log(environment.urlmachine.substring(0, environment.urlmachine.length- 5) + "/" + id + ".json");

  

    return this.http.patch(environment.urlmachine.substring(0, environment.urlmachine.length- 5) + "/" + id + ".json", JSON.stringify({ "AppFlag":1}))
            
        } 

       
        

         
   
}

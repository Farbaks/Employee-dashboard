import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getEmployees() {
    return this.httpClient.get(`assets/json/EmployeeData.json`, {
        observe: 'body',
        responseType: "json"   // This one here tells HttpClient to parse it as text, not as JSON
    })
}
}

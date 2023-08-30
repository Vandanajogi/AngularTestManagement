import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceRequest } from './service-request';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class ServicereqService {
private baseURL="http://localhost:8080/servicereq";
  constructor(private httpClient:HttpClient) { }

  getServiceReqList(): Observable<ServiceRequest[]>{
    return this.httpClient.get<ServiceRequest[]>(`${this.baseURL}`+'/get');
  }

  createServiceReq(servicereq: ServiceRequest): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/save', servicereq);
  }
  getServiceById(id: number): Observable<ServiceRequest>{
    return this.httpClient.get<ServiceRequest>(`${this.baseURL}`+'/getservice'+`/${id}`);

  }


  updateServiceReq(id: number, servicereq: ServiceRequest): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'/updateServiceReq'+`/${id}`, servicereq);
  }

  createFeedback(feedback: Feedback): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/savefeedback', feedback);
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessPointService {

  apiUrl = 'https://radius.odin-ict.nl/'

  constructor(private http: HttpClient) { }
  /**
   * Get all groups
   */
  getAccessPoints() {
    return this.http.get(this.apiUrl + 'accesspoints/')
  }

  pushAccessPointSettings(formValues: AccessPoint[]) {
    this.http.post(this.apiUrl + 'accesspoints/', formValues).subscribe()   
  }



}

export interface AccessPoint {
  id: number,
  name: string,
  ip: string,
}
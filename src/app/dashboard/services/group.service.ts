import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  apiUrl = 'https://radius.odin-ict.nl/'

  constructor(private http: HttpClient) { }
  /**
   * Get all groups
   */
  getGroups() {
    return this.http.get(this.apiUrl + 'groups/')
  }

  pushGroupSettings(formValues: Group[]) {
    this.http.post(this.apiUrl + 'groups', formValues).subscribe()   
  }



}

export interface Group {
  id: number,
  name: string,
  download: number,
  upload: number,
  concurrent: number,
  expiry: number,
}
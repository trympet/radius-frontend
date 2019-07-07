import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = 'https://radius.odin-ict.nl/'

  constructor(private http: HttpClient) { }

  /** Get all clients */
  getAllClients() {
    return this.http.get(this.apiUrl + 'clients')
  }

  /**
   * Get all data of one client
   * @param {number} clientId - ID of client
   */
  getClient(clientId: number) {
    return this.http.get(this.apiUrl + 'clients/')
  }

}

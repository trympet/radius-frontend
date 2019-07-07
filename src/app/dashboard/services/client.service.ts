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

export interface ConnectionSettings {
  clientId: number,
  blocked: boolean,
  nas: string,
  group: string,
  accessPoint: string,
  connectionType: string,
  macAddress: string,
  ipv4Address: string,
  ipv4Network: string,
  ipv6Address: string,
  ipv6Prefix: string,
  ipv6Enabled: boolean,
  hostname: string,
  username: string,
  password: string,
  domainName: string,
  router: string,
  ssid: string,
  psk: string,
}

export interface ContactInfo {
  firstname: string,
  lastname: string,
  address: string,
  company: string,
  zip: string,
  email: string,
  city: string,
  phone: number,
}
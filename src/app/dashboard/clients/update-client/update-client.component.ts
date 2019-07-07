import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClientService, ConnectionSettings } from '../../services/client.service';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  client: ConnectionSettings
  settingsForm: FormGroup
  formElement

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private fb: FormBuilder
  ) {

    
  }

  ngOnInit() {
    // this.client = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     const id = parseInt(params.get('clientId'))
    //     return this.clientService.getClient(id)
    //   })
    // )
    this.formElement = document.querySelector('#settingsForm')
    this.client = {
      clientId: 2,
      blocked: false,
      nas: 'test',
      group: 'asd',
      accessPoint: 'asd',
      connectionType: 'DHCP',
      macAddress: 'asd',
      ipv4Address: 'asd',
      ipv4Network: 'asd',
      ipv6Address: 'asd',
      ipv6Prefix: 'asd',
      ipv6Enabled: true,
      hostname: 'asd',
      username: 'asd',
      password: 'asd',
      domainName: 'asd',
      router: 'asd',
      ssid: 'asd',
      psk: 'asd',
    }
    this.settingsForm = this.fb.group({
      blocked: this.client.blocked,
      nas: this.client.nas,
      group: this.client.group,
      accessPoint: this.client.accessPoint,
      connectionType: this.client.connectionType,
      macAddress: this.client.macAddress,
      ipv4Address: this.client.ipv4Address,
      ipv4Network: this.client.ipv4Network,
      ipv6Address: this.client.ipv6Address,
      ipv6Prefix: this.client.ipv6Prefix,
      ipv6Enabled: this.client.ipv6Enabled,
      hostname: this.client.hostname,
      username: this.client.username,
      password: this.client.password,
      domainName: this.client.domainName,
      router: this.client.router,
      ssid: this.client.ssid,
      psk: this.client.psk,
    })
  }

  filterSettings(value) {
    const filteredNames = Object.keys(this.settingsForm.controls).filter(key => !key.startsWith(value))
    document.querySelectorAll('.hidden').forEach(el => el.classList.remove('hidden'))
    filteredNames.forEach( key => {
      const el = document.querySelector(`*[formControlName=${key}]`)
      if (el) {
        el.parentElement.parentElement.parentElement.parentElement.classList.add('hidden')
      } else {
        console.log(key);
        
      }
    })
    
    console.log();
    
    
  }

}

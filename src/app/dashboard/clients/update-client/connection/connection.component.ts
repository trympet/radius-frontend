import { Component, OnInit } from '@angular/core';
import { ClientService, ConnectionSettings } from '../../../services/client.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';


@Component({
  selector: 'client-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent implements OnInit{
  settingsChanged = false

  client: ConnectionSettings
  settingsForm: FormGroup
  formElement

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
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

    // init change detection
    this.settingsForm.valueChanges.subscribe( () => {
      this.settingsChanged = true
    })
  }

  // filters and disables formcontrols in formgroup 
  filterSettings(value) {
    this.settingsForm.enable() // enables all formcontrols
    Object.keys(this.settingsForm.controls)
      .forEach(key => {
        if (!key.startsWith(value)) {
          // disables formcontrol if it starts with filtervalue
          this.settingsForm.controls[key].disable()
        }
      })
  }

  reset() {
    this.settingsForm.patchValue({
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
}

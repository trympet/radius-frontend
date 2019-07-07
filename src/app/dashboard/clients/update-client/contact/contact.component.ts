import { Component, OnInit } from '@angular/core';
import { ClientService, ConnectionSettings } from '../../../services/client.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'client-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactInfo
  contactForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactInfo = {
      firstname: 'Alexander',
      lastname: 'Oliemans',
      address: 'Damsport 365',
      company: '',
      zip: '9728PS',
      email: 'alexanderoliemans@hotmail.com',
      city: 'Groningen',
      phone: '0683609965',
    }

    this.contactForm = this.fb.group(this.contactInfo)
  }

  // filters and disables formcontrols in formgroup 
  filterSettings(value) {
    this.contactForm.enable() // enables all formcontrols
    Object.keys(this.contactForm.controls)
      .forEach(key => {
        if (!key.startsWith(value)) {
          // disables formcontrol if it starts with filtervalue
          this.contactForm.controls[key].disable()
        }
      })
  }

}

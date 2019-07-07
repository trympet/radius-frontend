import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClientService, ConnectionSettings } from '../../services/client.service';



@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  client: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.client = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = parseInt(params.get('clientId'))
        return this.clientService.getClient(id)
      })
    )
  }

  filterSettings(value) {
    
  }

}

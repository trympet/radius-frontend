import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  navLinks: Array<any> = [
    {name: 'Dashboard', routerLink: '/dashboard', disabled: true},
    {name: 'Clients', routerLink: '/dashboard/clients'},
    {name: 'Groups', routerLink: '/dashboard/groups'},
    {name: 'Access points', routerLink: '/dashboard/access_points'},

  ]

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  }

}

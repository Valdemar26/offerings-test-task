import { Component, OnInit } from '@angular/core';
import { faGavel, faExchangeAlt, faUsers, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  faGavel = faGavel;
  faExchangeAlt = faExchangeAlt;
  faUsers = faUsers;
  faCogs = faCogs;

  constructor() { }

  ngOnInit() {
  }

}

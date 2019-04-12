import { Component, OnInit } from '@angular/core';
import {
  faQuestionCircle,
  faBell,
  faEnvelope,
  faUserCircle,
  faBuilding,
  faGavel,
  faExchangeAlt,
  faUsers,
  faCogs
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faUserCircle = faUserCircle;
  faBuilding = faBuilding;
  faGavel = faGavel;
  faExchangeAlt = faExchangeAlt;
  faUsers = faUsers;
  faCogs = faCogs;

  constructor() { }

  ngOnInit() {
  }

}

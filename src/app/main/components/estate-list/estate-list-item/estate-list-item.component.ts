import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-estate-list-item',
  templateUrl: './estate-list-item.component.html',
  styleUrls: ['./estate-list-item.component.scss']
})
export class EstateListItemComponent implements OnInit {
  @Input() estate;
  constructor() { }

  ngOnInit() {
  }

}

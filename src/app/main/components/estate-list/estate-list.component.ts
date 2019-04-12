import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.scss']
})
export class EstateListComponent implements OnInit {
  // estate;
  estate = [
    {
      image: '../../../../../assets/images/building2.jpg',
      name: 'residence de la colline',
      city: 'lausanne, vaud',
      invest: '1\'000\'000',
      cost: '25\'000\'000',
      min_invest: '100\'000',
      type: 'Co-Ownership',
      ltv: '55',
      period: '7',
      equity: '4.88',
      button_text: 'MORE-DETAILS',
      progressbar: 'width: 80%'
    },
    {
      image: '../../../../../assets/images/building3.jpg',
      name: 'calla rossa complex',
      city: 'carouge, geneva',
      invest: '10\'000\'000',
      cost: '22\'000\'000',
      min_invest: '500\'000',
      type: 'Co-Investment',
      ltv: '60',
      period: '7',
      equity: '5.20',
      button_text: 'PRE-SUBSCRIBE',
      progressbar: 'width: 0%'
    },
    {
      image: '../../../../../assets/images/building4.jpg',
      name: 'hauts de vesenaz',
      city: 'vesenas, geneve',
      invest: 'COMPLETE',
      cost: '8\'000\'000',
      min_invest: '250\'000',
      type: 'Meggazine-Debt',
      ltv: '85',
      period: '7',
      equity: '6.50',
      button_text: 'Add me to waiting list',
      progressbar: 'width:100%'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

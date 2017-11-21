import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATION_HOST, ROUTE_ANIMATION } from '../app.routing.animation';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],  
  host: ROUTE_ANIMATION_HOST, // tslint:disable-line:use-host-property-decorator
  animations: [ROUTE_ANIMATION]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

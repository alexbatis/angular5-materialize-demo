import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {
  data = [
    {
      header : 'Item 1',
      body : 'Lorem Ipsum...'
    },
    {
      header : 'Item 2',
      body : 'Lorem Ipsum...'
    }
  ]

  constructor() { }

  ngOnInit() {}

}

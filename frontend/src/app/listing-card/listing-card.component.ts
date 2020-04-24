import { Component, OnInit, Input } from '@angular/core';
import { ListingObject } from '../listing-object';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.css']
})
export class ListingCardComponent implements OnInit {

  @Input() listingObject : ListingObject;

  constructor() { }

  ngOnInit(): void {
  }

}

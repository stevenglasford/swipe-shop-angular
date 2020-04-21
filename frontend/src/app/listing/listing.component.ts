import { Component, OnInit, Input } from '@angular/core';
import { ListingObject } from '../listing_object';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() listingObject : ListingObject;

  constructor() {}

  ngOnInit(): void {
  }

}

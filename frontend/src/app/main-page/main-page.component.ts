import { Component, OnInit } from '@angular/core';
import { ListingObject } from '../listing_object';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  dataInteractionService = new DataInteractionService();
  listingObject : ListingObject;

  constructor() {}

  ngOnInit(): void {
    this.newListing()
  }

  newListing(){
    this.listingObject = this.dataInteractionService.pullNewListing();
  }

  hate(){
    this.dataInteractionService.hateItem(this.listingObject)
    this.newListing()
  }

  love(){
    this.dataInteractionService.loveItem(this.listingObject)
    this.newListing()
  }

}

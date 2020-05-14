import { Component, OnInit } from '@angular/core';
import { ListingObject } from '../listing-object';
import { DataInteractionService } from '../data-interaction.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  listingObject : ListingObject;

  constructor(private dataInteractionService : DataInteractionService) {}

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

import { Component, OnInit } from '@angular/core';
import { ListingObject } from '../listing_object';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dataInteractionService = new DataInteractionService();

  myListings : ListingObject[]

  constructor() { }

  ngOnInit(): void {
    this.myListings = this.dataInteractionService.pullMyListings();
  }

  editProfile(){
    console.log('editing profile')
  }

}

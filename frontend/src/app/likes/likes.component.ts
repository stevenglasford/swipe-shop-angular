import { Component, OnInit } from '@angular/core';
import { ListingObject } from '../listing_object';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  dataInteractionService = new DataInteractionService();
  listingObjects : ListingObject[];

  constructor() { }

  ngOnInit(): void {
    this.listingObjects = this.dataInteractionService.pullLikes();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ListingObject } from '../listing-object';
import { DataInteractionService } from '../data-interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.css']
})
export class ListingCardComponent implements OnInit {

  @Input() listingObject : ListingObject;

  constructor(private dataInteractionService : DataInteractionService, private router : Router) { }

  ngOnInit(): void {
  }

  remove(){
    this.dataInteractionService.removeListing(this.listingObject);

    // reload page
    this.router.navigateByUrl('profile');
  }

}

import { Injectable } from '@angular/core';
import { ListingComponent } from './listing/listing.component';

@Injectable({
  providedIn: 'root'
})
export class InternalInteractionService {

  currentListing : ListingComponent;
  currentUserID : number;

  constructor() { }

}

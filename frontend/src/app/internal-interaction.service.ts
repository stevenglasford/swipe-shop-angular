import { Injectable } from '@angular/core';
import { ListingComponent } from './listing/listing.component';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})

export class InternalInteractionService {

  currentUser : UserProfile;
  viewingUser : UserProfile;
  currentListing : ListingComponent;

  constructor() { }
}

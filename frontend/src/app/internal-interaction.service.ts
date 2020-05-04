import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';
import { ListingObject } from './listing-object';

@Injectable({
  providedIn: 'root'
})

export class InternalInteractionService {

  currentUser : UserProfile;
  viewingUser : UserProfile = null;
  viewingListing : ListingObject;
  lastAt : string;

  constructor() { }
}

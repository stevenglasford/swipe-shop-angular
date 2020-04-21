import { Injectable } from '@angular/core';
import { ListingObject } from './listing_object';

@Injectable({
  providedIn: 'root'
})

export class DataInteractionService {

  /* for testing
  listingQueue : ListingObject[] = [
    new ListingObject(3.0, "Fargo", "My stupid cat", "https://i.imgur.com/Ss75Vfa.jpg"),
    new ListingObject(6.0, "Bismarck", "My stupid dogs", "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
    new ListingObject(9.0, "Grand Forks", "My stupid phone", "https://scx1.b-cdn.net/csz/news/800/2015/howwilldatar.jpg"),
    new ListingObject(12.0, "Minneapolis", "My stupid cow Betsy", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYW0XEqHljEUNvoFfmEEpM7Z4cyq5V66MNrLyXerInvBFM5KUc&usqp=CAU"),
    new ListingObject(16.50, "Jamestown", "My stupid used car", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4B2mpOFXbAnsupjbRiAUambtV6jhyb4lx0sJuZOvp-s-VKjUS&usqp=CAU"),
    new ListingObject(300.0, "Los Angeles", "My stupid grandma", "https://peoplescience.maritz.com/-/media/Maritz/Project/PeopleScience/Articles/adult-grandma-elderly-432722.ashx?h=900&w=1200&la=en&hash=5F66C65B032FEE90B10A489D08EC8B7D0E64B8CE"),
    new ListingObject(34.0, "Germany", "My stupid science teacher", "https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg")
  ]
  */

  constructor() {}

  pullNewListing(){
    // pull a listing from the database


    // parse the data into an ListingObject

    
    // return the ListingObject
    return new ListingObject(3.0, "Fargo", "My stupid cat", "https://i.imgur.com/Ss75Vfa.jpg");   // testing   
  }

  hateItem(object : ListingObject){
    // tell the database not to show us this item again


  }
  
  loveItem(object : ListingObject){
    // tell the database we love this item


  }

}

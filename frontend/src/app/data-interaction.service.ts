import { Injectable } from '@angular/core';
import { ListingObject } from './listing_object';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})

export class DataInteractionService {

  // temporary
  listingQueue : ListingObject[] = [
    new ListingObject(3.0, "Fargo", "My stupid cat", "https://i.imgur.com/Ss75Vfa.jpg", "beastslayer69"),
    new ListingObject(6.0, "Bismarck", "My stupid dogs", "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "some.user"),
    new ListingObject(9.0, "Grand Forks", "My stupid phone", "https://scx1.b-cdn.net/csz/news/800/2015/howwilldatar.jpg", "someother.user"),
    new ListingObject(12.0, "Minneapolis", "My stupid cow Betsy", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYW0XEqHljEUNvoFfmEEpM7Z4cyq5V66MNrLyXerInvBFM5KUc&usqp=CAU", "random.person21"),
    new ListingObject(16.50, "Jamestown", "My stupid used car", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4B2mpOFXbAnsupjbRiAUambtV6jhyb4lx0sJuZOvp-s-VKjUS&usqp=CAU", "kanye.west"),
    new ListingObject(300.0, "Los Angeles", "My stupid grandma", "https://peoplescience.maritz.com/-/media/Maritz/Project/PeopleScience/Articles/adult-grandma-elderly-432722.ashx?h=900&w=1200&la=en&hash=5F66C65B032FEE90B10A489D08EC8B7D0E64B8CE", "kungfu.kenny"),
    new ListingObject(34.0, "Germany", "My stupid science teacher", "https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg", "some.guy")
  ]

  // temp
  messagePreviews : Message[] = [
    new Message('beastslayer69', 'terry.crews', 'https://i.imgur.com/Ss75Vfa.jpg', 'this is simply a test message', new Date('2020-04-22T18:30:00')),
    new Message('some.user', 'terry.crews', 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'this is simply another test message', new Date('2020-04-22T18:30:00')),
    new Message('someother.user', 'terry.crews', 'https://scx1.b-cdn.net/csz/news/800/2015/howwilldatar.jpg', 'this is yet another test message', new Date('2020-04-22T18:30:00')),
    new Message('random.person21', 'terry.crews', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYW0XEqHljEUNvoFfmEEpM7Z4cyq5V66MNrLyXerInvBFM5KUc&usqp=CAU', 'this is yet yetttt another test message', new Date('2020-04-22T18:30:00')),
    new Message('kanye.west', 'terry.crews', 'https://peoplescience.maritz.com/-/media/Maritz/Project/PeopleScience/Articles/adult-grandma-elderly-432722.ashx?h=900&w=1200&la=en&hash=5F66C65B032FEE90B10A489D08EC8B7D0E64B8CE', 'this is a stupid test message', new Date('2020-04-22T18:30:00')),
    new Message('kungfu.kenny', 'terry.crews',' https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg', 'this is a smart test message', new Date('2020-04-22T18:30:00')),
    new Message('woah.kenny', 'terry.crews', 'https://i.imgur.com/Ss75Vfa.jpg', 'this is another smart test message', new Date('2020-04-22T18:30:00')),
  ];

  messagesFromOneUser : Message[] = [
    new Message('', '', '', 'this is simply a test message', new Date('2020-04-22T18:30:00')),
    new Message('', '', '', 'this is simply a test message', new Date('2020-04-22T18:30:00')),
    new Message('', '', '', 'this is simply a test message', new Date('2020-04-22T18:30:00')),
    new Message('', '', '', 'this is simply a test message', new Date('2020-04-22T18:30:00')),
    new Message('', '', '', 'this is simply a test message', new Date('2020-04-22T18:30:00')),
    new Message('', '', '', 'this is simply a test message', new Date('2020-04-22T18:30:00')),
    new Message('', '', '', 'this is simply a test message', new Date('2020-04-22T18:30:00')),
  ]



  constructor() {}

  pullNewListing(){
    // pull a listing from the database


    // parse the data into an ListingObject

    
    // return the ListingObject

    // temporary
    return this.listingQueue[Math.floor(Math.random() * this.listingQueue.length)]  
  }

  pullMyListings(){
    // query database to find listings with my id

    // temporary
    return [
      new ListingObject(3.0, "Fargo", "My stupid cat", "https://i.imgur.com/Ss75Vfa.jpg", "beastslayer69"),
      new ListingObject(6.0, "Bismarck", "My stupid dogs", "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "some.user"),
      new ListingObject(9.0, "Grand Forks", "My stupid phone", "https://scx1.b-cdn.net/csz/news/800/2015/howwilldatar.jpg", "someother.user"),
      new ListingObject(12.0, "Minneapolis", "My stupid cow Betsy", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYW0XEqHljEUNvoFfmEEpM7Z4cyq5V66MNrLyXerInvBFM5KUc&usqp=CAU", "random.person21"),
      new ListingObject(16.50, "Jamestown", "My stupid used car", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4B2mpOFXbAnsupjbRiAUambtV6jhyb4lx0sJuZOvp-s-VKjUS&usqp=CAU", "kanye.west"),
      new ListingObject(300.0, "Los Angeles", "My stupid grandma", "https://peoplescience.maritz.com/-/media/Maritz/Project/PeopleScience/Articles/adult-grandma-elderly-432722.ashx?h=900&w=1200&la=en&hash=5F66C65B032FEE90B10A489D08EC8B7D0E64B8CE", "kungfu.kenny"),
      new ListingObject(34.0, "Germany", "My stupid science teacher", "https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg", "some.guy")
    ];
  }

  hateItem(object : ListingObject){
    // tell the database not to show us this item again


  }
  
  loveItem(object : ListingObject){
    // tell the database we love this item


  }

  pullMessagePreviews(){
    // query the database for the latest message from each person (descending order), also include their picture url

    // temp
    return this.messagePreviews;
  }


  pullLikes(){
    // query the database for all items I've liked

    // temp
    return this.listingQueue;
  }


  pullMessages(userID : number){
    // return this.messagesFromOneUser;
    if (userID == 6){
      return this.messagesFromOneUser;
    } else {
      return null;
    }
  }


}

import { Injectable } from '@angular/core';
import { ListingObject } from './listing-object';
import { Message } from './message';
import { UserProfile } from './user-profile';
import { InternalInteractionService } from './internal-interaction.service';

@Injectable({
  providedIn: 'root'
})

export class DataInteractionService {

  // temporary
  listings : ListingObject[] = [
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
    new Message('beastmaster69', 'terry.crews', 'https://i.imgur.com/Ss75Vfa.jpg', 'this is simply a test message', new Date('2020-04-22T18:30:00')),
    new Message('some.user', 'terry.crews', 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'this is simply another test message', new Date('2020-04-22T18:30:00')),
    new Message('someother.user', 'terry.crews', 'https://scx1.b-cdn.net/csz/news/800/2015/howwilldatar.jpg', 'this is yet another test message', new Date('2020-04-22T18:30:00')),
    new Message('random.person21', 'terry.crews', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYW0XEqHljEUNvoFfmEEpM7Z4cyq5V66MNrLyXerInvBFM5KUc&usqp=CAU', 'this is yet yetttt another test message', new Date('2020-04-22T18:30:00')),
    new Message('kanye.west', 'terry.crews', 'https://peoplescience.maritz.com/-/media/Maritz/Project/PeopleScience/Articles/adult-grandma-elderly-432722.ashx?h=900&w=1200&la=en&hash=5F66C65B032FEE90B10A489D08EC8B7D0E64B8CE', 'this is a stupid test message', new Date('2020-04-22T18:30:00')),
    new Message('kungfu.kenny', 'terry.crews', 'https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg', 'this is a smart test message', new Date('2020-04-22T18:30:00')),
    new Message('woah.kenny', 'terry.crews', 'https://i.imgur.com/Ss75Vfa.jpg', 'this is another smart test message', new Date('2020-04-22T18:30:00')),
  ];

  messagesFromOneUser : Message[] = [
    new Message('terry.crews', 'random.person21', 'https://i.imgur.com/Ss75Vfa.jpg', 'Hey Terry!', new Date('2020-04-22T18:30:00')),
    new Message('terry.crews', 'random.person21', 'https://i.imgur.com/Ss75Vfa.jpg', 'How are you doing?', new Date('2020-04-22T18:30:00')),
    new Message('terry.crews', 'random.person21', 'https://i.imgur.com/Ss75Vfa.jpg', 'Made any good sales lately?', new Date('2020-04-22T18:30:00')),
    new Message('random.person21', 'terry.crews', 'https://i.imgur.com/Ss75Vfa.jpg', 'No, not really, you?', new Date('2020-04-22T18:32:00')),
    new Message('terry.crews', 'random.person21', 'https://i.imgur.com/Ss75Vfa.jpg', 'Your mom is a bitch', new Date('2020-04-22T18:33:00')),
    new Message('random.person21', 'terry.crews', 'https://i.imgur.com/Ss75Vfa.jpg', 'Hey listen here fuckface', new Date('2020-04-22T18:34:00')),
    new Message('random.person21', 'terry.crews', 'https://i.imgur.com/Ss75Vfa.jpg', 'I\'d fuck you up in a fight so bad', new Date('2020-04-22T18:34:00')),
    new Message('random.person21', 'terry.crews', 'https://i.imgur.com/Ss75Vfa.jpg', 'Your mom is the fucking bitch', new Date('2020-04-22T18:34:00')),
    new Message('terry.crews', 'random.person21', 'https://i.imgur.com/Ss75Vfa.jpg', 'Sorry that was my little brother', new Date('2020-04-22T18:38:00')),
    new Message('terry.crews', 'random.person21', 'https://i.imgur.com/Ss75Vfa.jpg', 'My bad', new Date('2020-04-22T18:38:00')),
  ]

  constructor(private internalInteractionService : InternalInteractionService) {
    // temp
    let profile : UserProfile = new UserProfile(0, 'terry.poop', 'https://instagram.fbis1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/80700636_1316934521848417_2145641206340495929_n.jpg?_nc_ht=instagram.fbis1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=bCMGfISCMzkAX8RNqHK&oh=b49271d6c40038d8bed05190ca3195d7&oe=5EC907D8', 'Fargo, ND', this.listings);
    this.internalInteractionService.currentUser = profile;
  }


  login(username : string, password : string){
    // return a profile object

    //temp
    let profile : UserProfile = null;
    this.internalInteractionService.currentUser = profile;
  }


  pullNewListing(){
    // pull a listing from the database


    // parse the data into an ListingObject

    
    // return the ListingObject

    // temporary
    return this.listings[Math.floor(Math.random() * this.listings.length)]  
  }

  // pullMyListings(){
  //   // query database to find listings with my id

  //   // temporary
  //   return [
  //     new ListingObject(3.0, "Fargo", "My stupid cat", "https://i.imgur.com/Ss75Vfa.jpg", "beastslayer69"),
  //     new ListingObject(6.0, "Bismarck", "My stupid dogs", "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "some.user"),
  //     new ListingObject(9.0, "Grand Forks", "My stupid phone", "https://scx1.b-cdn.net/csz/news/800/2015/howwilldatar.jpg", "someother.user"),
  //     new ListingObject(12.0, "Minneapolis", "My stupid cow Betsy", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYW0XEqHljEUNvoFfmEEpM7Z4cyq5V66MNrLyXerInvBFM5KUc&usqp=CAU", "random.person21"),
  //     new ListingObject(16.50, "Jamestown", "My stupid used car", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4B2mpOFXbAnsupjbRiAUambtV6jhyb4lx0sJuZOvp-s-VKjUS&usqp=CAU", "kanye.west"),
  //     new ListingObject(300.0, "Los Angeles", "My stupid grandma", "https://peoplescience.maritz.com/-/media/Maritz/Project/PeopleScience/Articles/adult-grandma-elderly-432722.ashx?h=900&w=1200&la=en&hash=5F66C65B032FEE90B10A489D08EC8B7D0E64B8CE", "kungfu.kenny"),
  //     new ListingObject(34.0, "Germany", "My stupid science teacher", "https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg", "some.guy")
  //   ];
  // }

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
    return this.listings;
  }


  pullMessages(userID : number){
    // return this.messagesFromOneUser;
    if (userID == 6){
      return this.messagesFromOneUser;
    } else {
      return null;
    }
  }

  sendMessage(messageText : string, recipientUsername : string){
    // temp
    this.messagesFromOneUser.push(new Message(recipientUsername, 'terry.crews', '', messageText, new Date()));
  }

  pullProfile(id : number){
    // query database for user with this ID, and return a UserProfile object


    // temp
    return this.internalInteractionService.currentUser;

  }


}

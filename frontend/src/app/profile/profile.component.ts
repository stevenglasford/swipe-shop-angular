import { Component, OnInit, Input } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { UserProfile } from '../user-profile';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListingObject } from '../listing-object';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile : UserProfile = new UserProfile(0, '', '', '', []);

  // make this dynamic
  isMyProfile : boolean = true;

  constructor(private db : AngularFirestore, private dataInteractionService : DataInteractionService, private router : Router, private cookieService : CookieService) { }

  ngOnInit(): void {
    // this.userProfile = this.dataInteractionService.pullProfile(0);
    console.log(this.cookieService.get('userId'))

    this.db.collection<any>('users').ref
        .get()
        .then(res => {
          res.forEach(user => {
            if (user.data()['userId'] == this.cookieService.get('userId')){
              console.log(user)
              this.userProfile = new UserProfile(user.data()['userId'], user.data()['username'], user.data()['profilePictureUrl'], user.data()['location'], []);
  
              this.db.collection<any>('products').ref
                .get()
                .then(res => {
                  res.forEach(product => {
                    if (product.data()['owner'] == this.cookieService.get('username')){
                      this.userProfile.listings.push(new ListingObject(product.data()['price'], product.data()['location'], product.data()['name'], product.data()['photoUrl'], this.userProfile))
                    }
                  })
              })
            }
          })
      })


  }

  editProfile(){
    console.log('editing profile')
  }

  newListing(){
    this.router.navigateByUrl('new-listing')
  }

}

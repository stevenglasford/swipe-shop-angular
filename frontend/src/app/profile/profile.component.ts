import { Component, OnInit, Input } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { UserProfile } from '../user-profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile : UserProfile;

  // make this dynamic
  isMyProfile : boolean = true;

  constructor(private dataInteractionService : DataInteractionService, private router : Router) { }

  ngOnInit(): void {
    this.userProfile = this.dataInteractionService.pullProfile(0);

  }

  editProfile(){
    console.log('editing profile')
  }

  newListing(){
    this.router.navigateByUrl('new-listing')
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { UserProfile } from '../user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile : UserProfile;

  // make this dynamic
  isMyProfile : boolean = true;

  constructor(private dataInteractionService : DataInteractionService) { }

  ngOnInit(): void {
    this.userProfile = this.dataInteractionService.pullProfile(0);

  }

  editProfile(){
    console.log('editing profile')
  }

}

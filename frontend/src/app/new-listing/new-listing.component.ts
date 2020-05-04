import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {

  imageUrl : string;
  name : string;
  price : number;

  constructor(private dataInteractionService : DataInteractionService, private router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    if (this.imageUrl != '' && this.name != '' && this.price != null){
      this.dataInteractionService.addListing(this.imageUrl, this.name, this.price);
      this.router.navigateByUrl('profile');
    }
  }

}

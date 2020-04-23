import { Component, OnInit, Input } from '@angular/core';
import { ListingObject } from '../listing_object';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-preview',
  templateUrl: './listing-preview.component.html',
  styleUrls: ['./listing-preview.component.css']
})
export class ListingPreviewComponent implements OnInit {

  @Input() listingObject : ListingObject;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onClicked(){
    this.router.navigateByUrl('/messaging');
  }

}

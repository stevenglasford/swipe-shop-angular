import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username : string;
  password : string;

  constructor(private dataInteractionService : DataInteractionService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.dataInteractionService.signUp(this.username, this.password);
  }

}

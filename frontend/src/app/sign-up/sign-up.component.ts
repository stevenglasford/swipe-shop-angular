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
  error : boolean = false;

  constructor(private dataInteractionService : DataInteractionService) { }

  ngOnInit(): void {
  }

  signUp(){
    if (this.username != '' && this.username != null && this.password != '' && this.password != null){
      var myId = this.dataInteractionService.signUp(this.username.trim(), this.password.trim());
      console.log(myId);
      if (myId == -1){
        this.error = true;
        console.log('error')
      }
    }
    
  }

}

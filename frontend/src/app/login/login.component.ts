import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor(private dataInteractionService : DataInteractionService, private router : Router, private cookieService : CookieService) { }

  ngOnInit(): void {
  }

  login(){
    let id = this.dataInteractionService.login(this.username, this.password)
    if (id != -1){
      this.cookieService.set('userId', id.toString());
      this.router.navigateByUrl('');
    } else {
      this.password = '';
    }
  }

}

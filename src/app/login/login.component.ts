import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  error : boolean;

  constructor(private dataInteractionService : DataInteractionService, private router : Router, private cookieService : CookieService, private db : AngularFirestore) { }

  ngOnInit(): void {
  }

  login(){

    if (this.username != '' && this.username != null && this.password != '' && this.password != null){
      this.db.collection<any>('users').ref.where('username', '==', this.username)
        .get()
        .then(res => {
          if (res.docs.length == 0){
            this.error = true;
          } else {
            var successful = false;
            res.forEach(user => {
              if (user.data()['password'] == this.password){
                // successful login
                successful = true;
                this.cookieService.set('userId', user.data()['userId']);
                this.cookieService.set('username', user.data()['username']);
                this.cookieService.set('location', user.data()['location']);
                this.router.navigateByUrl('');
              }
            })

            if (!successful){
              this.error = true;
            }

          }
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username : string;
  password : string;
  profilePicture : string;
  location : string;

  error : boolean = false;

  constructor(private dataInteractionService : DataInteractionService, private db : AngularFirestore, private cookieService : CookieService, private router : Router) { }

  ngOnInit(): void {
  }

  signUp(){
    if (this.username != '' && this.username != null && this.password != '' && this.password != null && this.location != null && this.location != ''){
      this.db.collection<any>('users').ref.where('username', '==', this.username)
        .get()
        .then(res => {
          if (res.docs.length == 0){
            this.error = false;

            var maxId = 0;

            this.db.collection<any>('users').ref.get().then(res => {
              res.forEach(user => {
                if (user.data()['userId'] > maxId){
                  maxId = user.data()['userId'];
                }
              })
              console.log(maxId)

              let user = {
                username : this.username,
                password : this.password, 
                userId : maxId + 1,
                profilePictureUrl : this.profilePicture,
                location : this.location,
              };

              return new Promise<any>((resolve, reject) => {
                this.db.collection('users').add(user).then(res => {
                  this.cookieService.set('userId', (maxId + 1).toString())
                  this.router.navigateByUrl('')
                }, err => reject(err));
              });

            });

          } else {
            res.forEach(user => {
              this.error = true;
            })
          }
      })
    } 
    
  }

}

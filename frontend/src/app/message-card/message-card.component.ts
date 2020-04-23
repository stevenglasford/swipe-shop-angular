import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {

  @Input() message : Message;

  agoTime : String = "2d";

  constructor(private router : Router) { }

  ngOnInit(): void {
    let now = new Date();

    var diff = Math.abs(now.getTime() - this.message.sentDate.getTime());
    var diffMinutes = Math.round((diff /1000) / 60);

    if (diffMinutes >= 60){
      var diffHours = Math.round(diffMinutes / 60);

      if (diffHours >= 24){
        var diffDays = Math.round(diffHours / 24);

        if (diffDays >= 31){
          var diffWeeks = Math.round(diffDays / 7);

          this.agoTime = diffWeeks + "w";

        } else {
          this.agoTime = diffDays + "d";
        }

      } else {
        this.agoTime = diffHours + "h";
      }

    } else {
      this.agoTime = diffMinutes + "m";
    }

  }

  onClick(){
    this.router.navigateByUrl('/messaging');
  }

}

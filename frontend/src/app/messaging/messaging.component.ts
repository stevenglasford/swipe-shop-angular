import { Component, OnInit } from '@angular/core';
import { InternalInteractionService } from '../internal-interaction.service';
import { DataInteractionService } from '../data-interaction.service';
import { Message } from '../message';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  messages : Message[];


  constructor(private internalInteractionService : InternalInteractionService, private dataInteractionService : DataInteractionService) { }

  ngOnInit(): void {
    // get the person we're messaging


    // get our messages from the database
    this.messages = this.dataInteractionService.pullMessages(this.internalInteractionService.getViewingUser());
  }

}

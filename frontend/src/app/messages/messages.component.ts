import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // dataInteractionService = new DataInteractionService();

  messagePreviews : Message[];

  constructor(private dataInteractionService : DataInteractionService) { }

  ngOnInit(): void {
    this.messagePreviews = this.dataInteractionService.pullMessagePreviews();
  }

}

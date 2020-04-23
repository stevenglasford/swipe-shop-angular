import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { InternalInteractionService } from '../internal-interaction.service';
import { DataInteractionService } from '../data-interaction.service';
import { Message } from '../message';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollable') private myScrollContainer : ElementRef;

  messages : Message[];

  messageIsStart : boolean[] = [];
  messageIsMiddle : boolean[] = [];
  messageIsEnd : boolean[] = [];
  needsDateSeparator : boolean[] = [];

  messageText : string = '';


  constructor(private internalInteractionService : InternalInteractionService, private dataInteractionService : DataInteractionService) { }

  ngAfterViewChecked(){
    try{
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch {

    }
  }

  ngOnInit(): void {
    // get the person we're messaging


    // get our messages from the database
    this.messages = this.dataInteractionService.pullMessages(this.internalInteractionService.getViewingUser());

    this.updateMessageArrays();

    
  }

  updateMessageArrays(){
    this.messageIsStart = [];
    this.messageIsMiddle = [];
    this.messageIsEnd = [];
    this.needsDateSeparator = [];

    var counter = 0;
    this.messages.forEach(() => {
      if (this.nextMessageIsContinued(counter)){
        this.messageIsStart.push(true);
        this.messageIsMiddle.push(false);
        this.messageIsEnd.push(false);
      } else if (this.isMiddleMessage(counter)){
        this.messageIsStart.push(false);
        this.messageIsMiddle.push(true);
        this.messageIsEnd.push(false);
      } else if (this.isEndMessage(counter)){
        this.messageIsStart.push(false);
        this.messageIsMiddle.push(false);
        this.messageIsEnd.push(true);
      } else {
        this.messageIsStart.push(false);
        this.messageIsMiddle.push(false);
        this.messageIsEnd.push(false);
      }

      if (counter == 0){
        this.needsDateSeparator.push(true)
      } else {
        this.needsDateSeparator.push(this.messages[counter].sentDate.getDay() != this.messages[counter - 1].sentDate.getDay())
      }

      counter++;
    });
  }

  nextMessageIsContinued(thisIndex : number){
    return !this.messagesMatch(thisIndex, thisIndex - 1) && this.messagesMatch(thisIndex, thisIndex + 1)
  }

  isMiddleMessage(thisIndex : number){
    return this.messagesMatch(thisIndex, thisIndex - 1) && this.messagesMatch(thisIndex, thisIndex + 1)
  }

  isEndMessage(thisIndex : number){
    return this.messagesMatch(thisIndex, thisIndex - 1) && !this.messagesMatch(thisIndex, thisIndex + 1)
  }

  messagesMatch(index1 : number, index2 : number){
    try {
      return this.messages[index1].sentDate.getDate() == this.messages[index2].sentDate.getDate()
          && this.messages[index1].toUsername == this.messages[index2].toUsername;
    } catch {
      return false;
    }
  }

  sendMessage(){
    // temp
    this.messages.push(new Message('beastmaster69', 'terry.crews', '', this.messageText, new Date()));
    this.updateMessageArrays();

    this.messageText = '';
  }

}

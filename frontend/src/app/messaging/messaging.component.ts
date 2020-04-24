import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { InternalInteractionService } from '../internal-interaction.service';
import { DataInteractionService } from '../data-interaction.service';
import { Message } from '../message';
import { Router } from '@angular/router';
import { UserProfile } from '../user-profile';

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
  otherPerson : UserProfile;

  isInquiry : boolean = false;
  inquiryImage : string;


  constructor(private internalInteractionService : InternalInteractionService, private dataInteractionService : DataInteractionService, private router : Router) { }

  ngAfterViewChecked(){
    try{
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch {}
  }

  ngOnInit(): void {
    // get the person we're messaging
    this.otherPerson = this.internalInteractionService.viewingUser;

    if (this.internalInteractionService.viewingListing != null){
      this.isInquiry = true;
      console.log(this.internalInteractionService.viewingListing)
      this.inquiryImage = this.internalInteractionService.viewingListing.imageUrl;
    }

    // get our messages from the database
    console.log(this.internalInteractionService.viewingUser)
    try {
      this.messages = this.dataInteractionService.pullMessages(this.internalInteractionService.viewingUser);
      this.updateMessageArrays();
    } catch {
      this.router.navigateByUrl('messages')
    }
    
  }

  updateMessageArrays(){
    this.messageIsStart = [];
    this.messageIsMiddle = [];
    this.messageIsEnd = [];
    this.needsDateSeparator = [];

    if (this.messages == null || this.messages.length == 0){
      return;
    }

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
          && this.messages[index1].sentDate.getHours() == this.messages[index2].sentDate.getHours()
          && this.messages[index1].sentDate.getMinutes() == this.messages[index2].sentDate.getMinutes()
          && this.messages[index1].toUser.username == this.messages[index2].toUser.username;
    } catch {
      return false;
    }
  }

  sendMessage(){
    if (this.messageText.trim() != ''){
      if (this.isInquiry){
        this.dataInteractionService.sendMessage('', this.inquiryImage, this.internalInteractionService.viewingUser);
        this.internalInteractionService.viewingListing = null;
        this.isInquiry = false;
        this.inquiryImage = '';
      }
  
      this.dataInteractionService.sendMessage(this.messageText, '', this.internalInteractionService.viewingUser);
      this.messageText = '';
      this.messages = this.dataInteractionService.pullMessages(this.internalInteractionService.viewingUser);

      this.updateMessageArrays();
    }
  }

  back(){
    this.internalInteractionService.viewingUser = null;
    
    this.router.navigateByUrl(this.internalInteractionService.lastAt);
  }

}

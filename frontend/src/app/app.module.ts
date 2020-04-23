import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListingComponent } from './listing/listing.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { LikesComponent } from './likes/likes.component';
import { ListingPreviewComponent } from './listing-preview/listing-preview.component';
import { MessagingComponent } from './messaging/messaging.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListingComponent,
    ProfileComponent,
    HeaderComponent,
    ListingCardComponent,
    MessagesComponent,
    MessageCardComponent,
    LikesComponent,
    ListingPreviewComponent,
    MessagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

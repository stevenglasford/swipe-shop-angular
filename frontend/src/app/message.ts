import { from } from 'rxjs'

export class Message {
    public toUsername : string
    public fromUsername : string
    public otherUserPictureUrl : string
    public message : string
    public sentDate : Date

    constructor(toUsername : string, fromUsername : string, otherUserPictureUrl : string, message : string, sentDate : Date) {
        this.toUsername = toUsername;
        this.fromUsername = fromUsername;
        this.otherUserPictureUrl = otherUserPictureUrl;
        this.message = message;
        this.sentDate = sentDate;
    }
}
export class Message {
    public otherUsername : string
    public otherUserPictureUrl : string
    public message : string
    public sentDate : Date

    constructor(otherUsername : string, otherUserPictureUrl : string, message : string, sentDate : Date) {
        this.otherUsername = otherUsername;
        this.otherUserPictureUrl = otherUserPictureUrl;
        this.message = message;
        this.sentDate = sentDate;
    }
}
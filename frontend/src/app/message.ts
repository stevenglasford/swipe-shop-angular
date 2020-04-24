import { UserProfile } from './user-profile';

export class Message {
    public toUser : UserProfile
    public fromUser : UserProfile
    public message : string
    public sentDate : Date

    constructor(toUser : UserProfile, fromUser : UserProfile, message : string, sentDate : Date) {
        this.toUser = toUser;
        this.fromUser = fromUser;
        this.message = message;
        this.sentDate = sentDate;
    }
}
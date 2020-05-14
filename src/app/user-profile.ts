import { ListingObject } from './listing-object'

export class UserProfile {
    public id : number
    public username : string
    public picture : string
    public location : string
    public listings : ListingObject[]

    constructor(id : number, username : string, picture : string, location : string, listings : ListingObject[]) {
        this.id = id;
        this.username = username;
        this.picture = picture;
        this.location = location;
        this.listings = listings;
    }
}
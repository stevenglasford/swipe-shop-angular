import { UserProfile } from './user-profile';

export class ListingObject {
    public price : number
    public city : string
    public description : string
    public imageUrl : string
    public userProfile : UserProfile

    constructor(price : number, city : string, description : string, imageUrl : string, userProfile : UserProfile) {
        this.price = price;
        this.city = city;
        this.description = description;
        this.imageUrl = imageUrl;
        this.userProfile = userProfile;
    }
}
export class ListingObject {
    public price : number
    public city : string
    public description : string
    public imageUrl : string

    constructor(price : number, city : string, description : string, imageUrl : string) {
        this.price = price;
        this.city = city;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
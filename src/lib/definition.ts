export interface Services {
    "results": Service[]
}
export interface Service {
    "slug": string,
    "title": string,
    "icon": null | string

}
export interface Barber {
    "slug": string,
    "fullname": string,
    "is_shop": false,
    "avatar": string,
    "address": string,
    "lat": number,
    "lon": number,
    "rate": number,
    "distance": number,
    "is_bookmarked": boolean,
    "phone_number": string,
    "reviews_count": number,
    "services": string[]
}
export interface BarbersList {
    results:Barber[]
}
import { Loader } from "@googlemaps/js-api-loader"
declare var google;
export class Map {
    loader = null;
    el = null;
    map = null;
    constructor(el) {
        this.el = el;
        this.loader = new Loader({
            apiKey: "AIzaSyA6dralHFqtVUNRjlQSPe6EBWK8_69ycfQ",
            version: "weekly",
        });
        this.loader.load().then(() => {
            this.map = new google.maps.Map(this.el, {
                center: { lat: 35.670081, lng: 139.666253 },
                zoom: 11,
            });
        });
    }
}

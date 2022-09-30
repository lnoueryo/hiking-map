import { Loader } from "@googlemaps/js-api-loader"
import { env } from '$env/dynamic/public';
import { MAP_API_KEY } from '$lib/Env';

export class MainMap {
    loader: Loader;
    el: HTMLDivElement;
    map: google.maps.Map;
    constructor(el: HTMLDivElement) {
        this.el = el;
        this.loader = new Loader({
            apiKey: MAP_API_KEY as string,
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

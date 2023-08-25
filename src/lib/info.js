import { writable } from "svelte/store";

export const infoStore = writable({
    flightInfo: {},
    passengers: [{}],
    tags: 0,
    stage: 0
});

import { writable } from "svelte/store";

export const infoStore = writable({
    flightInfo: {},
    passengers: [{
        id: 0,
        theme: 'stone'
    }],
    tags: 1,
    theme: 'stone',
    stage: 0
});

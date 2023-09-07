import { writable } from "svelte/store";

export const infoStore = writable({
    flightInfo: {},
    passengers: [{
        theme: 'stone'
    }],
    tags: 1,
    theme: 'stone',
    stage: 0
});

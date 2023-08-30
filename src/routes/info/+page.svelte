<script>
    import { airports } from '$lib/airports'
    import Header from '../components/Header.svelte';
    export let data;

    function getFlagEmoji(countryCode) {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char =>  127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    }

    let from = airports.filter((a) => a.iata_code.toLowerCase() == data.flightInfo.from.toLowerCase())
    from = from[0]
    from.emoji = getFlagEmoji(from.country.split('-')[0])

    let to = airports.filter((a) => a.iata_code.toLowerCase() == data.flightInfo.to.toLowerCase())
    to = to[0]
    to.emoji = getFlagEmoji(to.country.split('-')[0])
</script>

<Header/>

<div class="grid grid-cols-1 place-items-center m-4">
    <div class="formContainer">
        <div class="card">
            <div class="info flex justify-between place-items-center">
                <div class="flightNo">
                    <small class="opacity-75 text-xs">Flight Number</small>
                    <h2 class="font-bold">{data.flightInfo.flightNo}</h2>
                </div>
                <div class="flightInfo text-end">
                    <small class="opacity-75 text-xs">Passenger Name</small>
                    <h2 class="font-bold">{data.passenger.name}</h2>
                </div>
            </div>

            <div class="fromTo my-4 opacity-75">     
                <div class="airportDisplay">
                    <p>{from.iata_code}</p>
                    <p>🡆</p>
                    <p>{to.iata_code}</p>
                </div>
                <div class="opacity-75 flex justify-between">
                    <small>{from.emoji}</small>
                    <small>{to.emoji}</small>
                </div>
                
            </div>

            <form class="actions block gap-2 mt-4 md:flex">
                <!-- TODO: Implement Contact Modal -->
                <button>Contact 📞</button> 
                <button class="mt-2 md:mt-0" formaction="mailto:{data.passenger.email}">Email 📧</button>
            </form>
            <!-- TODO: Implement Reporting -->
            <button class="mt-2">Report as Lost ⚠</button>
        </div>
    </div>

    <a href="/" class="back text-white mt-5 text-xs">Make your own labels 📌</a>
</div>
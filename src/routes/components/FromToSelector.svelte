<script>
    import { airports } from '$lib/airports'
    import { infoStore } from '$lib/info'

    let flightNo;
    $: departure = '';
    $: arrival = '';
    $: info = {flightNo, departure, arrival}
    
    $: arrivalResults = [];
    $: departureResults = [];
    function getArrival(q) {
        arrivalResults = airports.filter((a) => a.name.toLowerCase().includes(q.toLowerCase()))
    }

    function getDeparture(q) {
        departureResults = airports.filter((a) => a.name.toLowerCase().includes(q.toLowerCase()))
    }

    function pushInfo() {
        infoStore.update((d) => {
            let copy = d;
            copy.flightInfo = info;
            copy.stage = 1;
            return copy;
        })
        autocomplete = false;
    }

    function switchDestination() {
        console.log(arrival, departure)
        let arrCopy = arrival
        let depsCopy = departure
        arrival = depsCopy
        departure = arrCopy
        console.log(arrival, departure)
    }

    $: getArrival(arrival);
    $: getDeparture(departure);
    $: autocomplete = true;
</script>

<div class="flightInfo card">
    <h3 class="card-title">Flight Info ✈</h3>
    <form class="mt-4">
        <label for="flightNo">Flight Number? (IATA Code)</label>
        <input type="text" required bind:value={flightNo} name="flightNo" placeholder="(eg. AB123)">
        <div class="airport mt-2 md:flex justify-between gap-2">
            <div class="departure">
                <label for="from">Departing from? (Airport Code)</label>
                <input type="text" required bind:value={departure} name="from" placeholder="start typing names to search">
            </div>

            <p class="arrow" on:click={switchDestination}>⇌</p>

            <div class="arrival">
                <label for="to">Arriving at? (Airport Code)</label>
                <input required bind:value={arrival} type="dropdown" name="to" placeholder="start typing names to search">
            </div>
        </div>

        {#if autocomplete}
            <div class="completers flex justify-between gap-2">
                {#if (departure != '') }
                    <div class="autocomplete">
                        {#each departureResults.slice(0,5) as a}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <a on:click={() => {departure = a.iata_code}} class="autocompleted" value="{a.iata_code}">{a.name}</a>
                        {/each}
                    </div>
                {/if}

                {#if (arrival != '') }
                    <div class="autocomplete">
                        {#each arrivalResults.slice(0, 5) as a}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <a on:click={() => {arrival = a.iata_code;}} class="autocompleted" value="{a.iata_code}">{a.name}</a>
                        {/each}
                    </div>
                {/if}
            </div>
        {/if}

        <button class="mt-4" on:click={pushInfo}>Next</button>
    </form>
</div>
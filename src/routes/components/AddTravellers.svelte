<script>
  import { infoStore } from '$lib/info'
    import { onMount } from 'svelte';

    $: passengers = [{name: '', phone: '', email: ''}];
    $: saved = [];

    function addTraveler() {
        passengers = [{name: '', phone: '', email: ''}, ...passengers]
    }

    function getPassengers() {
        if (localStorage.getItem('passengers')) {
            let ls = localStorage.getItem('passengers')
            let answer = [];
            answer = ls.split('.')

            answer = answer.filter((a) => a != "")

            answer.forEach((a, i) => {
                answer[i] = JSON.parse(a)
            })

            return answer;
        }
        else return []
    }

    onMount(() => {
        saved = getPassengers();
    })

    function pushInfo() {
        infoStore.update((d) => {
            let copy = d;
            copy.passengers = passengers
            copy.stage = 2;
            return copy
        })
    }

    function select(index, passenger) {
        passengers[index] = passenger;
    }

    function removePassenger(index) {
        let removed = []
        passengers.forEach((p) => {
            if (passengers.indexOf(p) !== index) {
                removed = [p, ...removed]
            }
        })
        passengers = removed;
    }
</script>

<div class="card">
    <div class="card-title flex justify-between place-items-center">
        <h1 class="w-full">Add Travelers 👥</h1>
        <button on:click={addTraveler} class="w-1/3">+1</button>
    </div>

    {#each passengers as p, i}
        <div class="add sub-card mt-4">
            
            <form class="mt-2">
                <div class="flex justify-between place-items-center">
                    <h2 class="subtitle mb-2 mt-2">Traveler {passengers.indexOf(p)}</h2>
                    <p on:click={() => {removePassenger(i)}} class="opacity-75 hover:opacity-100 cursor-pointer transition">❌</p>
                </div>

                <details class="my-2">
                    <summary>
                        <div class="text inline">
                            <p class="inline">Show saved passengers?</p>
                            <p class="text-xs opacity-50" for="`">Information is loaded from previously generated labels that have been saved.</p>
                        </div>           
                    </summary>
                    <div class="saved">
                        {#each saved as s}
                            <a class="saved-entry" on:click={() => {select(i, s)}}>{s.name}</a>
                        {/each}
                    </div>
                </details>
                

                <label for="name">Name</label>
                <input type="text" bind:value={p.name} name="name"> 

                <div class="contact flex justify-between gap-2">
                    <div class="phone">
                        <label for="phone">Phone</label>
                        <input type="tel" bind:value={p.phone} name="phone" placeholder="Seperate with comma for multiple #s">
                    </div>
                    <div class="email">
                        <label for="email">Email</label>
                        <input type="email" bind:value={p.email} name="email">
                    </div>
                </div>
            </form>
        </div>
    {/each}

    <button class="mt-4" on:click={pushInfo}>Next</button>
</div>
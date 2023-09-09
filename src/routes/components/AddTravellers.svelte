<script>
    import { infoStore } from '$lib/info'
    import { rgb } from '$lib/themes'
    import { onMount } from 'svelte';
    import { flip } from 'svelte/animate';

    let themes = Object.keys(rgb)

    $: passengers = [{id: 1, name: '', phone: '', email: '', theme: 'stone'}];
    $: saved = [];

    function addTraveler() {
        passengers = [{id: passengers.length + 1, name: '', phone: '', email: '', theme: 'stone'}, ...passengers]
    }

    function getPassengers() {
        if (localStorage.getItem('passengers')) {
            let ls = localStorage.getItem('passengers')
            let answer = ls.split('|');

            
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
            copy.passengers.forEach((p) => {
                p.phone = p.phone.trim()
                p.email = p.email.trim()
            })
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

    {#each passengers as p, i (p.id)}
        <div class="add sub-card mt-4" animate:flip={{duration: 800}}>
            
            <form class="mt-2">
                <div class="flex justify-between place-items-center">
                    <h2 class="subtitle mb-2 mt-2">Traveler {p.id}</h2>
                    <div class="actions">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <p on:click={() => {removePassenger(i)}} class="opacity-75 hover:opacity-100 cursor-pointer transition">❌</p>
                    </div>
                </div>

                <details class="my-2" >
                    <summary>
                        <div class="text inline">
                            <p class="inline">Show saved passengers?</p>
                            <p class="text-xs opacity-50" for="`">Information is loaded from previously generated labels that have been saved.</p>
                        </div>           
                    </summary>
                    <div class="saved">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        {#each saved as s}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <a class="saved-entry" on:click={() => {select(i, s)}}>{s.name}</a>
                        {/each}
                    </div>
                </details>
                

                <label for="name">Name</label>
                <input type="text" bind:value={p.name} name="name"> 

                <div class="contact flex justify-between gap-2">
                    <div class="phone">
                        <label for="phone">Phone</label>
                        <input type="tel" bind:value={p.phone} name="phone">
                    </div>
                    <div class="email">
                        <label for="email">Email</label>
                        <input type="email" bind:value={p.email} name="email">
                    </div>
                </div>

                <div class="theme mt-2">
                    <label for="theme">Label Theme</label>
                    <select name="theme" class="bg-{p.theme}-600 mt-2" bind:value={p.theme}>
                        {#each themes as theme}
                            <option class="bg-{theme}-600" value="{theme}">{theme}</option>
                        {/each}
                    </select>
                </div>
            </form>
        </div>
    {/each}

    <button class="mt-4" on:click={pushInfo}>Next</button>
</div>
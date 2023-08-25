<script>
    import Labels from './Labels.svelte'
    import Header from './comp/Header.svelte'
    import Footer from './comp/Footer.svelte'
    import { infoStore } from '$lib/info'
    import FromToSelector from './comp/FromToSelector.svelte';
    import AddTravellers from './comp/AddTravellers.svelte';
    import NumberOfBags from './comp/NumberOfBags.svelte';

    function goBack() {
        if ($infoStore.stage != 0) {
            infoStore.update((d) => {
                let copy = d;
                copy.stage = copy.stage - 1;
                return copy;
            })
        }
    }

    function getPercent() {
        return Math.round((($infoStore.stage+1)/4)*100)
    }
</script>


{#if $infoStore.stage != 3}

<main class="grid grid-cols-1 place-items-center">

    <Header/>
        
    <p on:click={goBack} class="back">⬅ Back</p>
    <div class="progress-container">
        <div class="progress" style="width: {getPercent()}%"> {getPercent()}%</div>
    </div>

                <div class="formContainer">
                    {#if $infoStore.stage == 0}
                        <div class="fromTo">
                            <FromToSelector/>
                        </div>
                    {:else if $infoStore.stage == 1}
                            <AddTravellers/>
                    {:else if $infoStore.stage == 2}
                            <NumberOfBags/>
                    {/if}
                </div>
                <Footer/> 
                
            </main>
{:else}
    {#each $infoStore.passengers as p}
        {#each Array($infoStore.tags) as _}
            <p class="cut">---------------------✂----------------------</p>
            <Labels info={p} flightInfo={$infoStore.flightInfo}></Labels>
            <p class="cut">---------------------✂----------------------</p>
        {/each}
    {/each}
{/if}

<style>

</style>
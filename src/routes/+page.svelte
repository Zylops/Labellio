<script>
    import Labels from './components/Labels.svelte'
    import Header from './components/Header.svelte'
    import Footer from './components/Footer.svelte'
    import { infoStore } from '$lib/info'
    import FromToSelector from './components/FromToSelector.svelte';
    import AddTravellers from './components/AddTravellers.svelte';
    import NumberOfBags from './components/NumberOfBags.svelte';

    function goBack() {
        if ($infoStore.stage != 0) {
            infoStore.update((d) => {
                let copy = d;
                copy.stage = copy.stage - 1;
                return copy;
            })
        }
    }

    function getPercent(num) {
        let percent = Math.round(((num+1)/4)*100)
        return percent;
    }
    
</script>

<div class="grid grid-cols-1 place-items-center" class:print:hidden={$infoStore.stage == 3}>
    <div><Header/></div>
        
    <div class="flex justify-between w-2/4 mb-2 text-white text-sm font-extralight ">
        <!-- <p class="theme">Theme</p> -->
    </div>
    <div class="progress-container w-full">
        <div class="progress" style="width: {getPercent($infoStore.stage)}%"><p on:click={goBack} class="back inline">⮌</p> {getPercent($infoStore.stage)}%</div>
    </div>
</div>

{#if $infoStore.stage != 3}

<main class="grid grid-cols-1 place-items-center">

    <div class="formContainer">
        {#if $infoStore.stage == 0}
            <div>
                <FromToSelector/>
            </div>
        {:else if $infoStore.stage == 1}
            <div>
                <AddTravellers/>
            </div>
        {:else if $infoStore.stage == 2}
            <div>
                <NumberOfBags/>
            </div>
        {/if}
    </div>
    <Footer/> 
    
</main>
{:else}
    <Labels />
{/if}

<style>

</style>
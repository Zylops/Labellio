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


{#if $infoStore.stage != 3}

<main class="grid grid-cols-1 place-items-center">

    <Header/>
        
    <div class="flex justify-between w-2/4 mb-2 text-white text-sm font-extralight ">
        <!-- <p class="theme">Theme</p> -->
    </div>
    <div class="progress-container w-full">
        <div class="progress" style="width: {getPercent($infoStore.stage)}%"><p on:click={goBack} class="back inline">⮌</p> {getPercent($infoStore.stage)}%</div>
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
    <Labels />
{/if}

<style>

</style>
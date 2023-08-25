<script>
    import { infoStore } from '$lib/info'
    let tags = 0;
    let save = false;

    function generate() {
        infoStore.update((d) => {
            let copy = d;
            copy.tags = tags;
            copy.stage = 3;
            return copy;
        })

        function getPassengers() {
            let answer = ''
            $infoStore.passengers.forEach((p) => {
                answer = JSON.stringify(p) + '.' + answer
            })
            return answer;
        }

        if (save) {
            localStorage.setItem('passengers', getPassengers())
        }
    }
</script>

<div class="card">
    <h1 class="card-title">Finalize ✔</h1>
    <form>
        <label for="amount">How many labels do you need per passenger?</label>
        <input type="number" bind:value={tags} name="amount">

        <div class="save flex gap-4 mt-4">
            <div class="check">
                <input type="checkbox" bind:value={save} name="" id="">
            </div>
            <div class="text">
                <p>Save information for later?</p>
                <p class="text-xs opacity-50" for="`">Information is only stored locally, check this if you need to generate labels often.</p>
            </div>
        </div>

        <button on:click={generate}>Generate</button>
    </form>
</div>
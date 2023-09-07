<script>
    import Label from './Label.svelte';

    import { PUBLIC_URL, PUBLIC_QR_API } from '$env/static/public'
    import { infoStore } from '$lib/info'
    import { rgb } from '$lib/themes'

    let flightInfo = $infoStore.flightInfo

    function generateUrl(passenger, flightInfo) {
        let url = PUBLIC_URL + '/info'
        url = url + '?flightNo=' + flightInfo.flightNo
        url = url + '&from=' + flightInfo.departure
        url = url + '&to=' + flightInfo.arrival
        url = url + '&name=' + passenger.name
        url = url + '&phone=' + passenger.phone
        url = url + '&email=' + passenger.email
        return encodeURIComponent(url)
    }

    function generateQR(passenger) {
        let api = PUBLIC_QR_API.replace('INSERT', rgb[passenger.theme])
        let qr = api + generateUrl(passenger, flightInfo)
        return qr
    }

</script>

<div class="preprint mb-16 print:hidden">
    <div class="disclaimers mt-8">
        <p class="text-center text-white font-extralight">Hit Ctrl + P or the Print button below to print out your labels.</p>
        <p class="text-center text-white font-extralight text-sm opacity-25">Please wait until the QR is generated.</p>
    </div>

    <div class="flex justify-center p-4 gap-4">
        <!-- #TODO: Try again button leads to already filled forms as GET params -->
        <div class="flex gap-2 w-1/4 ">
            <form action="/" data-sveltekit-reload class="w-full">
                <button class="label-action">Try again? ♻</button>
            </form>
            <button on:click|preventDefault={() => {print()}} class="label-action">Print 🖨</button>
        </div>
    </div>
        
</div>

<div class="wrap grid grid-cols-2 print:block gap-4 m-8">
    {#each $infoStore.passengers as p}
        {#each Array($infoStore.tags) as _}
            <Label passenger={p} flightInfo={flightInfo} qrUrl="{generateQR(p)}" url="{PUBLIC_URL}"></Label>
        {/each}
    {/each}
</div>
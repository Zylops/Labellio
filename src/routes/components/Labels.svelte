<script>
    import Label from './Label.svelte';

    import { PUBLIC_URL, PUBLIC_QR_API } from '$env/static/public'
    import { infoStore } from '$lib/info.js'

    let flightInfo = $infoStore.flightInfo

    function generateUrl(passenger, flightInfo) {
        let url = PUBLIC_URL
        console.log(flightInfo)
        url = url + '?flightNo=' + flightInfo.flightNo
        url = url + '&from=' + flightInfo.departure
        url = url + '&to=' + flightInfo.arrival
        url = url + '&name=' + passenger.name
        url = url + '&phone=' + passenger.phone
        url = url + '&email=' + passenger.email
        return url
    }

    function generateQR(passenger) {
        let qr = PUBLIC_QR_API + generateUrl(passenger, flightInfo)
        console.log(qr)
        return qr
    }

</script>

<div class="flex justify-center p-4 gap-4 print:hidden">
<!-- #TODO: Try again button leads to already filled forms as GET params -->
<form action="/" data-sveltekit-reload class="w-2/4">
    <button class="label-action">Try again? ♻</button>
</form>
    <button on:click|preventDefault={() => {print()}} class="label-action">Print 🖨</button>
</div>

<div class="wrap">
    {#each $infoStore.passengers as p}
        {#each Array($infoStore.tags) as _}
            <Label passenger={p} flightInfo={flightInfo} url="{generateQR(p)}"></Label>
        {/each}
    {/each}
</div>
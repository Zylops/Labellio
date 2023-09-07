<script>
    import Label from './Label.svelte';

    import { PUBLIC_URL, PUBLIC_QR_API } from '$env/static/public'
    import { infoStore } from '$lib/info'
    import { rgb } from '$lib/themes'
    import Header from './Header.svelte';

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

<div class="preprint my-16 print:hidden">
    <Header/>
    <div class="disclaimers mt-8">
        <p class="text-center text-white font-extralight">Labels may look wierd as they are not meant to be viewed on sizes bigger than standard paper sizes.</p>
        <p class="text-center text-white opacity-25 font-extralight text-sm">Please wait until the QR is generated.</p>
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

<div class="wrap">
    {#each $infoStore.passengers as p}
        {#each Array($infoStore.tags) as _}
            <Label passenger={p} flightInfo={flightInfo} url="{generateQR(p)}"></Label>
        {/each}
    {/each}
</div>
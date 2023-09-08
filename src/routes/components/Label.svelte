<script>
    import { rgb } from '$lib/themes'
    import { PUBLIC_URL, PUBLIC_QR_API } from '$env/static/public'

    export let passenger, flightInfo;
    let url = generateUrl(passenger, flightInfo)
    let qrUrl = generateQR()


    function cleanUrl(url) {
        return url.replace('http://', '').replace('https://', '')
    }

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

    function generateQR() {
        let api = PUBLIC_QR_API.replace('INSERT', rgb[passenger.theme])
        return  api + url
    }
</script>

<a href="{generateUrl(passenger, flightInfo)}" class="label animate__fadeInUp animate__animated">
    <div class="header bg-{passenger.theme}-600">
        <img src="labellio_white.png" class="w-24" alt="labellio">
        <p>{cleanUrl(url)}</p>
    </div>
    <div class="main text-{passenger.theme}-600">
        <div class="passenger">
            <h1 class="name">{passenger.name}</h1>
            <p class="details">{passenger.phone}, {passenger.email}</p>
        </div>
        <div class="flight-no">
            <h1>{flightInfo.flightNo}</h1>
        </div>
    </div>
    <div class="footer text-{passenger.theme}-600">
        <div class="path">
            <div class="from">{flightInfo.departure}</div>
            <p>⇌</p>
            <div class="to">{flightInfo.arrival}</div>
        </div>
        <div class="qr"><img alt="Generating QR Code..." src="www.{qrUrl}"></div>
    </div>

    <img src="bg.svg" alt="" class="bg">
</a>

<!-- Tailwind does not preprocess these if theyre "not being used" as it does not recognize the theme variable inserted into the class name in realtime while preprocessing. -->
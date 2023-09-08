<script>
    export let passenger, flightInfo, qrUrl, url;

    function cleanUrl(url) {
        return url.replace('http://', '').replace('https://', '')
    }

</script>

<div class="label animate__fadeInUp animate__animated">
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
        <div class="qr"><img alt="Generating QR Code..." src="{qrUrl}"></div>
    </div>

    <img src="bg.svg" alt="" class="bg">
</div>
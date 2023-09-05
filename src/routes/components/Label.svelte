<script>
    export let passenger, flightInfo, url;
</script>

<div class="label" style="">
    <div class="header">
        <img src="labellio_white.png" class="w-24" alt="labellio">
        <p>Package Label</p>
    </div>
    <div class="main">
        <div class="passenger">
            <h1 class="name">{passenger.name}</h1>
            <p class="details">{passenger.phone}, {passenger.email}</p>
        </div>
        <div class="flight-no">
            <h1>{flightInfo.flightNo}</h1>
        </div>
    </div>
    <div class="footer">
        <div class="path">
            <div class="from">{flightInfo.departure}</div>
            <p>➔</p>
            <div class="to">{flightInfo.arrival}</div>
        </div>
        <div class="qr"><img alt="Generating QR Code..." src="{url}"></div>
    </div>

    <img src="bg.svg" alt="" class="bg">
</div>


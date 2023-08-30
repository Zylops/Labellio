<script>
    import { PUBLIC_URL, PUBLIC_QR_API } from '$env/static/public'
    export let info, flightInfo;

    function generateUrl() {
        let url = PUBLIC_URL
        url = url + '?flightNo=' + flightInfo.flightNo
        url = url + '&from=' + flightInfo.departure
        url = url + '&to=' + flightInfo.arrival
        url = url + '&name=' + info.name
        url = url + '&phone=' + info.phone
        url = url + '&email=' + info.email
        return url
    }

</script>

<div class="wrap">
    <div class="label" style="">
        <div class="header">
            <img src="labellio_white.png" class="w-24" alt="labellio">
            <p>Package Label</p>
        </div>
        <div class="main">
            <div class="passenger">
                <h1 class="name">{info.name}</h1>
                <p class="details">{info.phone}, {info.email}</p>
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
            <div class="qr"><img alt="Generating QR Code..." src="{PUBLIC_QR_API}{generateUrl()}"></div>
        </div>
    </div>

    <img src="bg.svg" alt="" class="bg">
</div>
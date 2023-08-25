<script>
    
    export let info, flightInfo;
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
            <div class="qr"><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=Example" alt=""></div>
        </div>
    </div>

    <img src="bg.svg" alt="" class="bg">
</div>
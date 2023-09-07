<script>
    export let passenger, flightInfo, url
</script>

<div class="label" style="">
    <div class="header bg-{passenger.theme}-600">
        <img src="labellio_white.png" class="w-24" alt="labellio">
        <p>Package Label</p>
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
            <p>➔</p>
            <div class="to">{flightInfo.arrival}</div>
        </div>
        <div class="qr"><img alt="Generating QR Code..." src="{url}"></div>
    </div>

    <img src="bg.svg" alt="" class="bg">
</div>

<!-- Tailwind does not preprocess these if theyre "not being used" as it does not recognize the theme variable inserted into the class name in realtime while preprocessing. -->

<div class="cache bg-slate-600 text-slate-600 bg-gray-600 text-gray-600 bg-zinc-600 text-zinc-600 bg-neutral-600 text-neutral-600 bg-stone-600 text-stone-600 bg-red-600 text-red-600 bg-orange-600 text-orange-600 bg-amber-600 text-amber-600 bg-yellow-600 text-yellow-600 bg-lime-600 text-lime-600 bg-green-600 text-green-600 bg-emerald-600 text-emerald-600 bg-teal-600 text-teal-600 bg-cyan-600 text-cyan-600 bg-sky-600 text-sky-600 bg-blue-600 text-blue-600 bg-indigo-600 text-indigo-600 bg-violet-600 text-violet-600 bg-purple-600 text-purple-600 bg-fuchsia-600 text-fuchsia-600 bg-pink-600 text-pink-600 bg-rose-600 text-rose-600"></div>

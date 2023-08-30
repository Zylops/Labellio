export function load({url}) {

    const labelData = {
        flightInfo: {
            flightNo: url.searchParams.get('flightNo'),
            from: url.searchParams.get('from'),
            to: url.searchParams.get('to')
        },
        passenger: {
            name: url.searchParams.get('name'),
            email: url.searchParams.get('email'),
            phone: url.searchParams.get('phone')
        }
    }

    return labelData;
}
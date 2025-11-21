



async function getBand() {
    const res = await fetch('https://rest.bandsintown.com/artists/Long%20Autumn/events?app_id=fa0f0548fed8b0c5d725caed2704be27&date=all')
    const data = await res.json()
    console.log("------------------------- THE DATA IS BELOW -------------------------------")
    return data;
}


export default async function shows() {
    const bandData = await getBand();
    return (
        <div>
            {bandData.map(event => (
            <pre key={event.id} className="border border-indigo-600 p-10 mb-2">
                    {/* <div> {JSON.stringify(event, null, 2)}</div> */}
                    <div>{ event.venue.name }</div>
                    <div>{event.venue.city}, {event.venue.region} </div>
                    <div>{event.datetime}</div>
            </pre>
                
            ))}
        </div>
    )
}
import { BandEvent } from '@/types/gigs';

// Fetch Data from Bands in Town to display ALL events from Long Autumn
async function getBand(): Promise<BandEvent[]> {
    const res = await fetch('https://rest.bandsintown.com/artists/Long%20Autumn/events?app_id=fa0f0548fed8b0c5d725caed2704be27&date=all')
    const data: BandEvent[] = await res.json()
    return data;
}
// Format the date of the returned date for each Event
// Weekday, Month, Day, Time
const formatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })
function formatDate(isoDate: string) {
    const eventDate = new Date(isoDate)
    return formatter.format(eventDate)
}

// HTML displaying band events
export default async function shows() {
    const bandData = await getBand();
    return (
        <div>
            {bandData.map((event: BandEvent) => (
            <pre key={event.id} className="border border-indigo-600 p-10 mb-2">
                    {/* <div> {JSON.stringify(event, null, 2)}</div> */}
                    <div>{event.venue.name }</div>
                    <div>{event.venue.city}, {event.venue.region} </div>
                    <div>{formatDate(event.datetime)}</div>
            </pre>
            ))}
        </div>
    )
}
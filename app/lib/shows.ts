import BandEvent from '../../types/gigs';

// Fetch upcoming events from Bands in Town
export async function getUpcomingShows(): Promise<BandEvent[]> {
    try {
        const res = await fetch(
            'https://rest.bandsintown.com/artists/Long%20Autumn/events?app_id=fa0f0548fed8b0c5d725caed2704be27&date=upcoming',
            { next: { revalidate: 3600 } } // Revalidate every hour
        );
        if (!res.ok) return [];
        const data: BandEvent[] = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching upcoming events:', error);
        return [];
    }
}

// Fetch past shows
export async function getPastShows(): Promise<BandEvent[]> {
    try {
        const res = await fetch(
            'https://rest.bandsintown.com/artists/Long%20Autumn/events?app_id=fa0f0548fed8b0c5d725caed2704be27&date=past',
            { next: { revalidate: 86400 } } // Revalidate daily
        );
        if (!res.ok) return [];
        const data: BandEvent[] = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching past events:', error);
        return [];
    }
}

// Format the date to show month abbreviation and day
export function formatDate(isoDate: string) {
    const eventDate = new Date(isoDate);
    const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const day = eventDate.getDate();
    return { month, day };
}

// Format time
export function formatTime(isoDate: string) {
    const eventDate = new Date(isoDate);
    return eventDate.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
}

export function formatFullDate(isoDate: string) {
  const eventDate = new Date(isoDate);
  return eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}
export function formatShowDateTime(isoDate: string) {
  return {
    date: formatFullDate(isoDate),
    time: formatTime(isoDate)
  };
}
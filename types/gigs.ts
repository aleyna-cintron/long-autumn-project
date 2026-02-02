export default interface Venue {
  name: string;
  city: string;
  region: string;
}

export interface Offer {
  type: string;
  url: string;
  status: string;
}

export default interface BandEvent {
  id: string;
  datetime: string;
  venue: Venue;
  url?: string;
  offers?: Offer[];
  [key: string]: unknown; // for any other fields you don't type yet
}
export default interface Venue {
  name: string;
  city: string;
  region: string;
}

export default interface BandEvent {
  id: string;
  datetime: string;
  venue: Venue;
  [key: string]: any; // for any other fields you don't type yet
}
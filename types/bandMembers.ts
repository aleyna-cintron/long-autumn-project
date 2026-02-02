export interface BandMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  variant: 'left' | 'right';
}

export const bandMembers: BandMember[] = [
  {
    name: 'Conor Moran',
    role: 'Drums',
    imageUrl: '/band-cards/conor.JPEG',
    bio: "Conor's dynamic drumming drives Long Autumn's live energy...",
    variant: 'left',
  },
  {
    name: 'Nick Harvey',
    role: 'Lead Guitar',
    imageUrl: '/band-cards/harv.JPG',
    bio: "One of the original three members, Nick's guitar work is the backbone...",
    variant: 'left',
  },
  {
    name: 'John Mark',
    role: 'Lead Vocals, Guitar',
    imageUrl: '/band-cards/johnmark.JPEG',
    bio: "The voice that started it all. John's emotive delivery brings depth to every lyric...",
    variant: 'left',
  },
  {
    name: 'Jam Templeton',
    role: 'Guitar, Backing Vocals',
    imageUrl: '/band-cards/jam.JPG',
    bio: "Jam's intricate guitar work and harmonies add layers of texture...",
    variant: 'right',
  },
  {
    name: 'Kolbe Maloney',
    role: 'Bass Guitar',
    imageUrl: '/band-cards/kolbeBike.JPG',
    bio: "Kolbe's bass lines provide the foundation that holds Long Autumn together...",
    variant: 'right',
  },
];

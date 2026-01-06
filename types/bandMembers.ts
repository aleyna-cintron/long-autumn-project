export interface BandMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  variant: 'left' | 'right';
}

export const bandMembers: BandMember[] = [
  {
    name: 'John Mark',
    role: 'Lead Vocals, Guitar',
    imageUrl: '/johnmark.jpeg',
    bio: "The voice that started it all. John's emotive delivery brings depth to every lyric...",
    variant: 'left',
  },
  {
    name: 'Jam Templeton',
    role: 'Guitar, Backing Vocals',
    imageUrl: '/jam.jpg',
    bio: "Jam's intricate guitar work and harmonies add layers of texture...",
    variant: 'right',
  },
  {
    name: 'Nick Harvey',
    role: 'Lead Guitar',
    imageUrl: '/harv.jpg',
    bio: "One of the original three members, Nick's guitar work is the backbone...",
    variant: 'left',
  },
  {
    name: 'Kolbe Maloney',
    role: 'Bass Guitar',
    imageUrl: '/kolbeBike.jpg',
    bio: "Kolbe's bass lines provide the foundation that holds Long Autumn together...",
    variant: 'right',
  },
  {
    name: 'Conor Moran',
    role: 'Drums',
    imageUrl: '/conor.jpeg',
    bio: "Conor's dynamic drumming drives Long Autumn's live energy...",
    variant: 'left',
  },
];

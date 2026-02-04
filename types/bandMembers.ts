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
    bio: `Likes: Fishing, golf, Skyrim | Dislikes: Bad electric drum kits | Genres: Metal, EDM | Fun fact: Has been playing drums since he was 4 | "${`Jam would be a good cult leader I would follow him`}"`,
    variant: 'left',
  },
  {
    name: 'Nick Harvey',
    role: 'Lead Guitar',
    imageUrl: '/band-cards/harv.JPG',
    bio: `From: Tewksbury, MA | Likes: Graphic design, gear, Tim Robinson | Dislikes: When something was just working 2 seconds ago and now it's not | Genres: Shoegaze, 2000's sports video game soundtracks | Fun fact: Has Long Autumn tattooed on his toes - "L O N G" on his left foot and "A U T U M" on his right | "I hardly know her! HAHAH!"`,
    variant: 'left',
  },
  {
    name: 'Johnny Mark',
    role: 'Lead Vocals',
    imageUrl: '/band-cards/johnmark.JPEG',
    bio: `From: Goffstown, NH | Likes: Lord of the Rings, fishing, The Neighbourhood | Dislikes: Country music | Genres: Metal, alt pop rock | Fun fact: Met Jam for the first time because he was a janitor at his high school`,
    variant: 'left',
  },
  {
    name: 'Jam Templeton',
    role: 'Guitar, Backing Vocals',
    imageUrl: '/band-cards/jam.JPG',
    bio: `From: Goffstown, NH | Likes: Fixing things, anime, starting projects that never get finished | Dislikes: Putting something down, looking away, then looking back and it's vanished into the backrooms | Genres: Shoegaze, punk | Fun fact: He built the main strat that he plays | "I've got a salad in the garage its a garage salad"`,
    variant: 'right',
  },
  {
    name: 'Kolbe Maloney',
    role: 'Bass Guitar',
    imageUrl: '/band-cards/kolbeBike.JPG',
    bio: `From: Manchester, NH | Likes: Comedy, football, snowboarding | Genres: Pop, rock | Fun fact: He has a baby and was in the Marines`,
    variant: 'right',
  },
];

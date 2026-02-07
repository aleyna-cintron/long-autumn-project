export interface BandMemberCardData {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  cardNumber: number;
  joinedYear?: string;
}

export interface CardGridConfig {
  positions: number[];
  rotations: number[];
  scrollMultiplier?: number;
  cardWidth?: number;
  cardHeight?: number;
  staggerDelay?: number;
}

export interface CardGridProps {
  cards: BandMemberCardData[];
  config?: Partial<CardGridConfig>;
  renderFront: (card: BandMemberCardData) => React.ReactNode;
  renderBack: (card: BandMemberCardData) => React.ReactNode;
  containerClassName?: string;
  cardClassName?: string;
  header?: React.ReactNode;
}

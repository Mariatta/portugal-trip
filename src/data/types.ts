export interface Hotel {
  name: string;
  rating: number;
  ratingCount: string;
  price: '€' | '€€' | '€€€';
  priceLabel: string;
  tags: string[];
  description: string;
  tip: string;
  website?: string;
}

export interface Restaurant {
  name: string;
  rating: number;
  ratingCount: string;
  price: '€' | '€€' | '€€€';
  tags: string[];
  description: string;
  mustTry: string;
  hours?: string;
  bookAhead?: boolean;
}

export interface Activity {
  description: string;
  url?: string;
  mapUrl?: string;
}

export interface Day {
  dayNum: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
  dueBy?: string;
  url?: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  emoji: string;
  items: ChecklistItem[];
}

export interface MapPoint {
  name: string;
  type: 'attraction' | 'hotel' | 'restaurant';
  lat: number;
  lng: number;
}

export interface CityData {
  name: string;
  slug: string;
  dates: string;
  nights: number;
  tagline: string;
  accentColor: string;
  transport?: string;
  mapCenter: { lat: number; lng: number };
  mapZoom?: number;
  mapPoints: MapPoint[];
  hotels: Hotel[];
  restaurants: Restaurant[];
  days: Day[];
}

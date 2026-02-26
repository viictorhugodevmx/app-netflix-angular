export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number; // 0-10
  category: 'Trending' | 'Top Rated' | 'Action' | 'Comedy';
  cover: string; // url fake (placeholder)
}

export const MOVIES: Movie[] = [
  { id: 1, title: 'Midnight Run', year: 2023, rating: 8.4, category: 'Trending', cover: 'https://picsum.photos/300/180?random=11' },
  { id: 2, title: 'Red Horizon', year: 2024, rating: 8.9, category: 'Top Rated', cover: 'https://picsum.photos/300/180?random=12' },
  { id: 3, title: 'Fast Lane', year: 2022, rating: 7.9, category: 'Action', cover: 'https://picsum.photos/300/180?random=13' },
  { id: 4, title: 'Laugh Factory', year: 2021, rating: 7.2, category: 'Comedy', cover: 'https://picsum.photos/300/180?random=14' },

  { id: 5, title: 'Neon City', year: 2024, rating: 8.1, category: 'Trending', cover: 'https://picsum.photos/300/180?random=15' },
  { id: 6, title: 'The Summit', year: 2023, rating: 9.1, category: 'Top Rated', cover: 'https://picsum.photos/300/180?random=16' },
  { id: 7, title: 'Last Stand', year: 2020, rating: 7.7, category: 'Action', cover: 'https://picsum.photos/300/180?random=17' },
  { id: 8, title: 'Weekend Plan', year: 2019, rating: 7.0, category: 'Comedy', cover: 'https://picsum.photos/300/180?random=18' },

  { id: 9, title: 'Shadow Code', year: 2022, rating: 8.0, category: 'Trending', cover: 'https://picsum.photos/300/180?random=19' },
  { id: 10, title: 'Golden Hour', year: 2021, rating: 8.8, category: 'Top Rated', cover: 'https://picsum.photos/300/180?random=20' }
];

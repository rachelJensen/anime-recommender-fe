export type GenreTypes = {
  [key: string]: string;
  Action: string,
  Adventure: string,
  'Avant Garde': string,
  'Award Winning': string,
  LGBTQ: string,
  Comedy: string,
  Drama: string,
  Fantasy: string,
  Horror: string,
  Mystery: string,
  Romance: string,
  'Sci-Fi': string,
  Sports: string,
  Supernatural: string
};

const genreCodes:GenreTypes = {
  Action: '1',
  Adventure: '2',
  'Avant Garde': '5',
  'Award Winning': '46',
  LGBTQ: '28,26',
  Comedy: '4',
  Drama: '8',
  Fantasy: '10',
  Horror: '14',
  Mystery: '7',
  Romance: '22',
  'Sci-Fi': '24',
  Sports: '30',
  Supernatural: '37'
}

export default genreCodes;
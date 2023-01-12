import genreCodes, {GenreTypes} from "./genres";

const queryGenerator = (searchText: string, selectedGenres: string[]) => {
  if (searchText !== '' || selectedGenres.length > 0) {
    const genreParam = selectedGenres
      .map((genre:string) => genreCodes[genre as keyof GenreTypes])
    return `https://api.jikan.moe/v4/anime?genres=${genreParam}&q=${searchText}&sfw`;
  } else {
    return 'https://api.jikan.moe/v4/recommendations/anime';
  };
}

export default queryGenerator;
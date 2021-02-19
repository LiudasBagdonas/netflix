import { CONTENT } from './constants';

  export const allMovies = (state) => state[CONTENT].movies.data;
  export const isLoading = (state) => state[CONTENT].movies.isLoading;
  export const error = (state) => state[CONTENT].movies.error;
  export const selected = (state) => state[CONTENT].movies.selected;

  export const favorites = (state) => state[CONTENT].favorites;

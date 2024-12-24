import { Game } from './endpoint';

export type FetchGamesResponse = {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};

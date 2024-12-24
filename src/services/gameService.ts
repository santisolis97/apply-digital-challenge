import { FetchGamesResponse } from '@/utils/types';
import { apiClient } from './apiClient';

export const fetchGames = (
  page: string,
  genre?: string
): Promise<FetchGamesResponse> => {
  return apiClient(
    `/games?${genre ? `genre=${encodeURIComponent(genre)}` : ''}&${
      page ? `page=${page}` : ''
    }`
  );
};

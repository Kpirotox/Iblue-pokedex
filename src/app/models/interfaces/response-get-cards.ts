import { PokemonCard } from "./pokemon-card";

export interface ResponseGetCards {
  data: PokemonCard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

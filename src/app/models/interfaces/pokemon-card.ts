import { Supertypes } from "src/app/enums/supertypes.enum";

export interface PokemonCard  {
  id: string;
  name: string;
  supertype: Supertypes;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  attacks: Attack[];
  weaknesses: Weakness[];
  resistances: Resistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: CardSet;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: CardImages;
  tcgplayer: TcgPlayerInfo;
  cardmarket: CardMarketInfo;
  numberadd: number;
  index?: number;
}

interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

interface Weakness {
  type: string;
  value: string;
}

interface Resistance {
  type: string;
  value: string;
}

interface CardSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: CardImages;
}

interface Legalities {
  unlimited: string;
}

interface CardImages {
  symbol: string;
  logo: string;
  small: string;
  large: string;
  [key: string]: string;
}

interface TcgPlayerInfo {
  url: string;
  updatedAt: string;
  prices: {
    holofoil: PriceInfo;
    reverseHolofoil: PriceInfo;
  };
}

interface PriceInfo {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

interface CardMarketInfo {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number;
    suggestedPrice: number;
    reverseHoloSell: number;
    reverseHoloLow: number;
    reverseHoloTrend: number;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
  };
}

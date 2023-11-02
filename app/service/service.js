import { TrendingCoin } from "../config/apis";

export const fetchTrending = async (currency) => {
  const response = await fetch(TrendingCoin(currency))
  const json = await response.json();
  return json;
}
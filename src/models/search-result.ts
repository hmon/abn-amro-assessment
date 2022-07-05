import { Show } from "@/models/shows";

export type SearchResults = SearchResult[]

export interface SearchResult {
  score: number;
  show: Show;
}

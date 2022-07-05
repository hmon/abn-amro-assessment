import { BaseService } from "@/services/_base.service";
import { Show, Shows } from "@/models/shows";
import { singleton } from "tsyringe";
import { SearchResults } from "@/models/search-result";

@singleton()
export class TvShowsService extends BaseService {
  async getAll (): Promise<Shows> {
    const result = await this.request.get<Shows>("shows");

    return result.data;
  }

  async search (query: string): Promise<SearchResults> {
    const result = await this.request.get<SearchResults>("search/shows", {
      params: {
        q: query
      }
    });

    return result.data;
  }

  async getTvShow (id: number): Promise<Show> {
    const result = await this.request.get<Show>(`shows/${id}`);

    return result.data;
  }
}

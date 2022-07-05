import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Genre, Shows } from "@/models/shows";
import { RemoteData } from "@/models/remoteData";
import { container } from "tsyringe";
import { TvShowsService } from "@/services/tv-shows.service";

@Module({
  name: "tvShows",
  namespaced: true
})
export class TvShowsStore extends VuexModule {
  public remoteData = RemoteData.NotAsked;

  public shows: Shows = [];

  @Mutation
  public setRemoteData (state: RemoteData) {
    this.remoteData = state;
  }

  public get getAll () {
    return this.shows;
  }

  public get getByGenre () {
    return (genre: Genre) => this.shows.filter(show => show.genres.includes(genre));
  }

  public get getByPopularity () {
    return this.shows.sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
  }

  public get isLoading () {
    return this.remoteData === RemoteData.Pending;
  }

  @Mutation
  public setShows (shows: Shows) {
    this.shows = shows;
  }

  @Action
  async fetchShows () {
    const tvShowsService = container.resolve(TvShowsService);

    if (this.remoteData !== RemoteData.NotAsked) {
      return;
    }

    this.setRemoteData(RemoteData.Pending);

    try {
      const shows = await tvShowsService.getAll();

      this.setRemoteData(RemoteData.Success);
      this.setShows(shows);
    } catch (error: unknown) {
      this.setRemoteData(RemoteData.Failure);
      this.context.dispatch("common/showErrorMessage", error);
    }
  }
}

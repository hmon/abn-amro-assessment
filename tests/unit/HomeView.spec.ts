import { container } from "tsyringe";
import { TvShowsService } from "@/services/tv-shows.service";
import { shallowMount } from "@vue/test-utils";
import store from "@/store";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  let tvShowsService: TvShowsService;

  beforeEach(() => {
    container.clearInstances();
    tvShowsService = container.resolve(TvShowsService);
  });

  it("should call getAll when HomeView mounts", () => {
    const tvShowsServiceMock = jest.spyOn(tvShowsService, "getAll").mockResolvedValue([]);

    const wrapper = shallowMount(HomeView, {
      global: {
        plugins: [store]
      }
    });

    expect(tvShowsServiceMock).toHaveBeenCalled();
  });

  it("should show loading spinner", function() {
    const wrapper = shallowMount(HomeView, {
      global: {
        plugins: [store]
      }
    });

    expect(wrapper.html()).toContain("<loading-spinner-stub></loading-spinner-stub>");
  });
});

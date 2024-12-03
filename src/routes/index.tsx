import { getTopGames } from "@/shared/api/twitchApi/axios";
import { DialogInput } from "@/components/dialog-input";
import Loading from "@/components/loading";
import { lazy, Suspense } from "solid-js";
import { Button } from "@/components/ui/button";
import { createAsync, query } from "@solidjs/router";

const Carousel = lazy(() => import("@/components/carousel"));

const getGames = query(async () => {
  const res = await getTopGames();
  return res;
}, "users");

export const route = {
  preload: () => getGames(),
};
export default function Home() {
  const games = createAsync(() => getGames());

  // if (!games) return <Loading></Loading>
  return (
    <Suspense fallback={<Loading />}>
      <main class="h-[2000px] overflow-hidden">
        <section class="w-full">
          <div class="flex flex-col items-center justify-end bg-background pb-10 pt-24 md:py-12">
            <div class="flex flex-col items-center justify-center ">
              <h1 class="pb-4 pt-12 text-9xl xl:text-6xl md:pt-16 md:text-4xl ">
                Discover Twitch Vods
              </h1>
              <p class="pb-10 text-center text-2xl lg:text-base md:pb-6 md:text-sm">
                Watch twitch past broadcasts streams Start by Typing twitch
                username...
              </p>
            </div>
            <DialogInput>
              <Button class="bg-button-foreground  px-40 text-xl text-text text-white lg:text-base md:px-32 md:text-sm sm:px-28">
                {/* <MagnifyingGlassIcon class="h-6 w-6 pr-1" /> */}
                Search Steamer
              </Button>
            </DialogInput>
          </div>
        </section>
        <section class="relative flex w-full flex-col items-center justify-center rounded-2xl ">
          <div>
            <h1 class="pb-3 text-7xl text-white xl:text-6xl md:text-4xl">
              Top streams Now
            </h1>
          </div>

          <Carousel slides={games()} />
        </section>
      </main>
    </Suspense>
  );
}

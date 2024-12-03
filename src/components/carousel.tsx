import { createAsync, query } from "@solidjs/router";
import CardVideo from "./card-video";
import { Thumb } from "./carousel-Thumbs";
import { Skeleton } from "./ui/skeleton";
import { getTopStreamsByGame } from "@/shared/api/twitchApi/axios";
import { createResource, createSignal, For } from "solid-js";

type PropType = {
  // slides?: TopGame[]
  slides?: any;
};

// const getTopGames = query(async (idGame: string, type: string) => {
//   const res = await getTopStreamsByGame(idGame, type);
//   return res;
// }, "users");

// export const route = {
//   preload: () => getTopGames(),
// };

const Carousel = ({ slides }: PropType) => {
  // const games = createAsync(() => getGames());
  // console.log("SLIDE", slides[0]?.id);

  // const [idGame, setIdGame] = createSignal(32982);
  // const [type, setType] = createSignal<"offline" | "stream" | "clips">(
  //   "stream"
  // );
  const [game] = createResource(async () => {
    const res = await getTopStreamsByGame("32982", "stream");
    return res;
  });

  console.log("SLDIESSWS",slides)
  return (
    <>
      <div class="relative rounded-xl border-[2px] border-border p-5 lg:pl-[100px] md:ml-[25vw] sm:ml-[460px]">
        <div class="relative pb-4 ">
          <div class="overflow-hidden">
            <div class="flex">
              <For each={slides}>
                {(game: any, i) => (
                  <Thumb
                    number={i()}
                    // selected={Number(game?.id) === idGame()}
                    imgSrc={game?.box_art_url
                      .replace("{width}", "320")
                      .replace("{height}", "180")}
                  />
                )}
              </For>
              {/* {slides?.map((game: any, index: number) => (
              ))} */}
            </div>
          </div>
        </div>
      </div>
      <div class="container z-999 pt-2">
        <div class="gridCard">
          <For each={game()}>
            {(game) => <CardVideo video={game} type={"stream"}></CardVideo>}
          </For>
        </div>
      </div>
    </>
  );
};

export default Carousel;

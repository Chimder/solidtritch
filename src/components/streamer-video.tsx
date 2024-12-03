import { getVideosByUserId } from "@/shared/api/twitchApi/axios";

import CardVideo from "./card-video";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { useParams } from "@solidjs/router";
import { createResource, createSignal, For } from "solid-js";

const StreamerVideos = () => {
  const params = useParams();
  const id = params?.id as string;

  const [type, setType] = createSignal<"offline" | "stream" | "clips">(
    "offline"
  );
  // const [idGame, setIdGame] = createSignal(32982);

  const [videos] = createResource(async () => {
    const result = await getVideosByUserId(id, type());
    return result;
  });

  console.log("VIDEO", videos());
  return (
    <section class="container pt-2 ">
      <div class="rounded-xl border-[2px] border-border">
        <div class="flex items-center justify-evenly py-4">
          <Button
            variant="ghost"
            class={`border-[2px] border-border  px-[12vw] py-[2vh] text-white ${
              type() === "offline" ? "bg-primary" : ""
            }`}
          >
            Streams
          </Button>
          <Button
            variant="ghost"
            class={`border-[2px] border-border px-[12vw] py-[2vh] text-white ${
              type() === "clips" ? "bg-primary" : ""
            }`}
          >
            Clips
          </Button>
        </div>
        <div class="gridCard">
          <For
            each={videos()?.videos}
            fallback={Array.from({ length: 12 }, (_, index) => (
              <div
                class="relative mr-4 w-full overflow-hidden rounded-2xl"
                style={{ "padding-bottom": "56%" }}
              >
                <div class="absolute inset-0 px-3">
                  <Skeleton class="h-full w-full" />
                </div>
              </div>
            ))}
          >
            {(video) => <CardVideo type={type()} video={video} />}
          </For>
        </div>
      </div>
    </section>
  );
};

export default StreamerVideos;

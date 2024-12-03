import { TwitchVideo } from "@/shared/api/twitchApi/types";
import { formatCreatedAt } from "@/shared/lib/data-forma";

import { Badge } from "./ui/badge";
import DialogIframe from "./dialog-iframe";

type Props = {
  video: any;
  type: "offline" | "stream" | "clips";
};

const CardVideo = ({ video, type }: Props) => {
  const online = type === "stream";
  return (
    <DialogIframe
      name={online ? video?.user_login : video?.id}
      type={type}
      url={video?.embed_url}
    >
      <div class="relative mx-1 mb-1 h-full w-full cursor-pointer rounded-sm sm:mx-0">
        <span class="relative box-border block w-full opacity-100">
          <img
            class="relative h-full w-full rounded-xl align-middle opacity-95 brightness-75 duration-500 ease-in-out"
            src={
              online
                ? video?.thumbnail_url
                    .replace("{width}", "320")
                    .replace("{height}", "180")
                : video?.thumbnail_url
                    .replace("%{width}", "320")
                    .replace("%{height}", "180")
            }
            loading="lazy"
            width={320}
            height={180}
            alt="Your alt text"
          />
        </span>
        <div class="absolute left-0 top-0 flex h-full w-full flex-col justify-between p-3 md:p-4">
          <div class="relative flex items-start justify-between text-sm">
            <div class="mx-1 flex items-center text-white">
              <Badge class="my-[-10px] rounded-full bg-black/80 text-white">
                {/* <EyeOpenIcon class="mr-3 h-[12px] w-[12px]" /> */}
                <Badge class="mx-[-6px] rounded-full bg-white/20 px-2 py-[-2px] text-white ">
                  {online ? video?.viewer_count : video?.view_count}
                </Badge>
              </Badge>
            </div>

            <div class="mx-1 flex h-2 items-center  rounded-full text-white">
              <span class="font-bold">
                {type === "stream" && (
                  <Badge class="rounded-full bg-red-600 text-white">Live</Badge>
                )}
                {type === "offline" && typeof video?.duration === "string" && (
                  <Badge class="rounded-full bg-black/80 text-white">
                    {video.duration
                      .split(/[hms]/)
                      .filter(Boolean)
                      .map((tp:any) => tp.padStart(2, "0"))
                      .join(":")}
                  </Badge>
                )}
                {type === "clips" && (
                  <Badge class="rounded-full bg-black/80 text-white">
                    {video.duration} s
                  </Badge>
                )}
              </span>
            </div>
          </div>
          <div class="flex items-end text-sm">
            <div class="overflow-hidden ">
              <div class="text-base font-bold text-white">
                {video?.user_login}
              </div>
              <div class="overflow-hidden whitespace-nowrap text-xs font-bold text-white">
                {video?.title}
              </div>
              <div class="flex items-start text-xs text-white">
                {online && <span class="pr-2">started:</span>}
                {type === "stream"
                  ? formatCreatedAt(new Date(video?.started_at).getTime())
                  : type === "offline"
                  ? formatCreatedAt(
                      new Date(video?.published_at || 999).getTime()
                    )
                  : formatCreatedAt(
                      new Date(video?.created_at || 999).getTime()
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogIframe>
  );
};

export default CardVideo;

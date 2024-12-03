import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type Props = {
  url?: string;
  clsn?: string;
  children?: any;
  name?: string;
  type?: "stream" | "offline" | "clips";
  videoId?: number;
};

const DialogIframe = ({ url, clsn, children, name, type, videoId }: Props) => {
  return (
    <Dialog>
      <DialogTrigger class="z-1000">{children}</DialogTrigger>
      <DialogContent class="z-[9999] flex h-[82vh] w-[84vw]  items-baseline justify-center rounded-xl border-[3px] border-card bg-background xl:h-[74vh] xl:w-[92vw] lg:h-[64vh] md:h-[54vh] md:w-[96vw] sm:h-[42vh]">
        <div class="flex">
          {type === "stream" ? (
            <>
              <iframe
                title="video"
                class="mt-3 h-[74vh] w-[64vw] pr-2 xl:h-[68vh] xl:w-[70vw] lg:mt-1 lg:h-[57vh] lg:w-[86vw] md:h-[49vh] sm:h-[36vh] sm:w-[94vw]"
                src={`https://player.twitch.tv/?channel=${name}&autoplay=1&muted=1&parent=localhost&parent=tritchv.pages.dev&parent=solidtritch.vercel.app`}
              ></iframe>
              <iframe
                title="chat"
                class="mt-3 h-[74vh] w-[18vw] rounded-2xl xl:h-[68vh] lg:hidden"
                src={`https://www.twitch.tv/embed/${name}/chat?parent=localhost&parent=tritchv.pages.dev&parent=solidtritch.vercel.app&darkpopout`}
              ></iframe>
            </>
          ) : type === "offline" ? (
            <iframe
              title="video"
              class="iframeOC"
              src={`https://player.twitch.tv/?video=v${name}&parent=localhost&parent=tritchv.pages.dev&parent=solidtritch.vercel.app&autoplay=true`}
            ></iframe>
          ) : (
            <iframe
              title="video"
              class="iframeOC "
              src={`${url}&parent=localhost&parent=tritchv.pages.dev&parent=solidtritch.vercel.app`}
            ></iframe>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogIframe;

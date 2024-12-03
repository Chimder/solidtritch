import { Badge } from "./ui/badge";

type PropType = {
  imgSrc: string;
  // selected: boolean;
  number: number;
  // index: number;
  // type?: "clips" | "stream";
  // onClick: (index: number, type: "clips" | "stream") => void;
};

export const Thumb = ({
  imgSrc,
  // selected,
  number,
}: // index,
// onClick,
PropType) => {
  return (
    <div class="group relative z-999 mr-4 flex-[0_0_12%] rounded-2xl border-[2px] opacity-30 hover:opacity-60">
      <button
        class="text-decoration-none m-0 block w-full cursor-pointer rounded-2xl border-0 bg-transparent p-0 transition-opacity duration-300 focus:outline-none"
        type="button"
      >
        <div class="absolute mr-1  flex w-full  cursor-pointer justify-end border-0  ">
          <Badge class="flex h-8 w-4 items-center justify-center bg-black/90 p-3">
            <span class="text-lg text-white">{number + 1}</span>
          </Badge>
        </div>
        <img
          class="ImgCarusel"
          loading="lazy"
          width={320}
          height={180}
          src={imgSrc}
          alt="Your alt text"
        />
      </button>
      <div class="ImgCarusel absolute top-0 z-10 flex w-full flex-col rounded-2xl opacity-0 group-hover:opacity-100">
        <div
          // whileHover={{ scale: 1.05 }}
          // onClick={() => onClick(index, "stream")}
          // style={{
          //   backgroundImage:
          //     "linear-gradient(to top, transparent 50%, rgba(0, 0, 0, 0.9) 100%)",
          // }}
          class="relative flex h-[50%] w-full items-center justify-center bg-black/50 hover:bg-black/5"
        >
          <button
            // whileHover={{ scale: 1.1 }}
            class="mt-5 text-white focus:outline-none"
          >
            <Badge class="text-base text-white xl:text-sm">Stream Online</Badge>
          </button>
        </div>

        <div
          // onClick={() => onClick(index, "clips")}
          // style={{
          //   backgroundImage:
          //     "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9) 100%)",
          // }}
          class="relative flex h-[50%] w-full items-center justify-center bg-black/50 hover:bg-black/5"
        >
          <button class="mb-5 text-white focus:outline-none">
            <Badge class="text-base text-white xl:text-sm">Top Clips</Badge>
          </button>
        </div>
      </div>
    </div>
  );
};

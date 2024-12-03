import Loading from "@/components/loading";
import StreamerInfo from "@/components/streamer-info";
import StreamerVideos from "@/components/streamer-video";
import { lazy, Suspense } from "solid-js";

// const StreamerInfo = lazy(() => import("@/components/streamer-info"));
// const StreamerVideos = lazy(() => import("@/components/streamer-video"));

// export const loader =
//   (queryClient: QueryClient) =>
//   async ({ params }: LoaderFunctionArgs) => {
//     if (!params.id) {
//       console.log(params.id);
//       throw new Error("No contact ID provided");
//     }
//     const id = params.id;
//     queryClient.ensureQueryData(useUserById(id));
//     queryClient.ensureQueryData(useUserEmotes(id));
//     return id;
//   };

const Streamer = () => {
  // const data = useLoaderData()
  return (
    <Suspense fallback={<Loading />}>
      <article class="overflow-hidden">
        <StreamerInfo />
        <StreamerVideos />
      </article>
    </Suspense>
  );
};

export default Streamer;

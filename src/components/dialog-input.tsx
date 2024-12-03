
import { createSignal } from 'solid-js'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { useNavigate } from '@solidjs/router'
// import { Input } from './ui/input'

export function DialogInput({ children }: any) {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = createSignal<string>('')
  // const [debouncedSearchQuery] = useDebounce(searchQuery, 500)

  // const { data: searchResults, isFetching } = useSearchInput(debouncedSearchQuery)

  return (
    <Dialog>
      <DialogTrigger >{children}</DialogTrigger>
      <DialogContent class="md:top-100 z-[1100] h-auto max-w-lg rounded-xl border-[3px] border-card bg-black sm:absolute sm:top-64">
        <DialogHeader class="">
          <DialogTitle class="flex items-center justify-center whitespace-nowrap">
            Search streamer
            {/* {isFetching && <ReloadIcon class="ml-2 h-4 w-4 animate-spin" />} */}
          </DialogTitle>
        </DialogHeader>
        <div class="pt-3">
          <input
            class="border-card focus:border-card active:border-card"
            type="text"
            placeholder="Search"
            // value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          ></input>
        </div>
        <div
          class="overflow-hidden"
        >
          {/* {searchResults?.map(channel => (
            <div key={channel.display_name}>
              <div
                // key={channel.id}
                class="relative flex h-16 cursor-pointer list-none items-start rounded-lg pl-5 pt-3 text-secondary no-underline  hover:bg-card hover:opacity-80"
                onClick={() => navigate(`/streamer/${channel.id}`)}
              >
                <div class="flex items-center justify-center">
                  <img
                    class="w-10 rounded-full"
                    width={320}
                    height={180}
                    src={channel.thumbnail_url}
                    loading="lazy"
                    alt=""
                  />

                  <span class="top[-20px] relative pl-5 text-white">
                    {channel.display_name}
                  </span>
                  {channel.is_live && (
                    <div></div>
                    // <DotFilledIcon class="relative left-1 top-[2px] animate-pulse text-red-700"></DotFilledIcon>
                  )}
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </DialogContent>
    </Dialog>
  )
}

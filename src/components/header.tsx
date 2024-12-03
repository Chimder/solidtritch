import { A } from "@solidjs/router"

const Header = () => {
  // const { data: account, isFetching } = useAccountInfo()
  return (
    <header class="fixed z-[1100] flex h-24 w-full justify-between  border-[2px] border-b-card bg-background">
      <A  class="flex items-center pl-24" href="/">
        HOME
      </A>

      {/* {isFetching ? (
        <div class="flex items-center justify-center pr-24">
          <ReloadIcon class="ml-1 h-6 w-6 animate-spin text-green-600 " />
        </div>
      ) : account ? (
        <DropDownLogo>
          <div class="flex items-center justify-center pr-24">
            <div class="pr-2 text-green-600">
              {account?.name} {account?.ownerId}
            </div>
            <img class="w-10 rounded-full" src="/user.png" alt="userLogo" />
          </div>
        </DropDownLogo>
      ) : ( */}
      {/* <div class="flex flex-col items-center justify-center pr-20">
        <Link preventScrollReset={false} class="flex items-center pl-24" to={PATH.SIGNIN}>
          <Badge class="mb-4 text-white">sing-in</Badge>
        </Link>
        <Link preventScrollReset={false} class="flex items-center pl-24" to={PATH.SIGNUP}>
          <Badge class="text-white">register</Badge>
        </Link>
      </div> */}
      {/* )} */}
    </header>
  )
}

export default Header

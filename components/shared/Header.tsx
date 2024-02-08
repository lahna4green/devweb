import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

function Header() {
  return (
    <header className="bg-purple-100 w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="/assets/images/logo.png" width={600} height={50} alt="DZÉvénement logo"></Image>
        </Link>

        <SignedIn>
          <nav className=" md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>

          <SignedOut>
            <Button asChild className="bg-purple-600 hover:bg-purple-500 rounded-full" size="lg">
              <Link href="/sign-in">Connexion</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
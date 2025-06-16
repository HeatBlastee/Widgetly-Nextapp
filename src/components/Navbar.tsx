import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeaderMenu from "@/components/header-menu";

const Navbar = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <div className="flex space-x-2">
                <SignInButton>
                  <Button
                    variant="ghost"
                    className="bg-black text-white hover:bg-black/80"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button
                    variant="ghost"
                    className="bg-gray-800 text-white hover:bg-gray-700"
                  >
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-4">
                <HeaderMenu />
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import React from "react";

function Home() {
  return (
    <div className="container font-mono pr-0 pl-0">
      <div className="text-center text-3xl font-bold sm:text-left bg-black text-white pt-4 pb-4 sm:pl-4 sm:mt-2 sm:mx-3 sm:rounded-xl ">
        DICE DAPP
      </div>
      <NavigationMenu className="navigation-menu gap-3 flex flex-col sm:flex-row mx-auto mt-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className="sm:text-3xl" href="/">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className="sm:text-3xl" href="/">
              Store
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className="sm:text-3xl" href="/">
              Community
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className="sm:text-3xl" href="/">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="mt-auto sm:mt-0">
          <NavigationMenuItem>
            <Button>Connect your wallet</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="title mt-10 font-extrabold text-8xl text-center">Hi!</div>
      <div className="title text-3xl text-center">guest</div>
    </div>
  );
}

export default Home;

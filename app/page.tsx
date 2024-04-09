"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

//NAVBAR
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

//WEB3
import { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { AccountContext } from "./context/context";
import { InfuraProvider } from "ethers";

//CARD
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
  const [account, setAccount] = useState("");

  async function getWeb3Modal() {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "your-infura-id",
          },
        },
      },
    });
    return web3Modal;
  }

  async function connect() {
    try {
      const web3Modal = await getWeb3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const accountAddress = await signer.getAddress();
      setAccount(accountAddress);
      localStorage.setItem("isWalletConnected", "true");
    } catch (err) {
      console.log("error:", err);
    }
  }

  async function disconnect() {
    try {
      setAccount("");
      localStorage.removeItem("isWalletConnected");
    } catch (err) {
      console.log("error:", err);
    }
  }

  return (
    <div className="font-mono pr-0 pl-0">
      <div className="text-center text-3xl font-bold sm:text-left bg-black text-white pt-4 pb-4 sm:pl-4 sm:mt-2 sm:mx-3 sm:rounded-xl">
        HG DAPP
      </div>
      <NavigationMenu className="navigation-menu gap-3 lg:gap-4 flex flex-col sm:flex-row mx-auto mt-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="sm:text-l md:text-2xl lg:text-4xl"
              href="/"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="sm:text-l md:text-2xl lg:text-4xl"
              href="#collection"
            >
              Collection
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="sm:text-l md:text-2xl lg:text-4xl"
              href="#community"
            >
              Community
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="sm:text-l md:text-2xl lg:text-4xl"
              href="#about"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="mt-auto sm:mt-0">
          <NavigationMenuItem>
            <Button onClick={connect}>Connect your wallet</Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button onClick={disconnect}>Disconnect Wallet</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <hr className="mt-4" />
      <div className="title mt-10 font-extrabold text-5xl text-center">Hi!</div>
      {account ? (
        <div className="title text-3xl text-center">
          {`${account.substring(0, 5)}..${account.substring(
            account.length - 3
          )}`}
        </div>
      ) : (
        <div className="title text-3xl text-center">guest</div>
      )}

      <hr className="mt-10" />

      {/* COLLECTION TITLE */}
      <div id="collection" className="p-10 bg-black">
        <h2 className="text-center font-bold text-white text-md md:text-3xl">
          Our Collection
        </h2>
      </div>

      {/* COLLECTION CONTENT */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <div>
          <Card className="mx-3">
            <CardHeader>
              <CardTitle className="text-md">Collection 1</CardTitle>
              <CardDescription>Rare collection #6857</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://avatars.githubusercontent.com/u/91598145?v=4"
                alt="collection 1"
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="mx-3">
            <CardHeader>
              <CardTitle className="text-md">Collection 2</CardTitle>
              <CardDescription>Rare collection #2352</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://avatars.githubusercontent.com/u/91598145?v=4"
                alt="collection 1"
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="mx-3">
            <CardHeader>
              <CardTitle className="text-md">Collection 3</CardTitle>
              <CardDescription>Rare collection #2452</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://avatars.githubusercontent.com/u/91598145?v=4"
                alt="collection 1"
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="mx-3">
            <CardHeader>
              <CardTitle className="text-md">Collection 4</CardTitle>
              <CardDescription>Rare collection #3573</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://avatars.githubusercontent.com/u/91598145?v=4"
                alt="collection 1"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="mt-10" />

      {/* COMMUNITY TITLE */}
      <div id="community" className="p-10 bg-black">
        <h2 className="text-center font-bold text-white text-md md:text-3xl">
          Community
        </h2>
      </div>

      {/* COMMUNITY CONTENT */}

      <div className="mt-10">
        <h2 className="text-center font-extrabold text-black text-3xl sm:text-5xl md:text-7xl">
          .JOIN.
        </h2>
        <h2 className="text-center font-extrabold text-black text-3xl sm:text-5xl md:text-7xl">
          .OUR.
        </h2>
        <h2 className="text-center font-extrabold text-black text-3xl sm:text-5xl md:text-7xl">
          .COMMUNITY.
        </h2>
      </div>

      {/* COMMUNITY PLATFORM */}
      <div className="mt-10 mx-10 sm:mx-32 md:mx-52 lg:mx-96">
        <span className=" font-bold sm:text-xl md:text-2xl lg:text-3xl">
          Our platform
        </span>
        <div className="border border-black rounded-lg grid grid-cols-3 py-3">
          <Link className="mx-auto" href="#link1">
            <svg
              className="w-16 h-16"
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
            </svg>
          </Link>
          <Link className="mx-auto" href="#link2">
            <svg
              className="w-16 h-16"
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 496 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
            </svg>
          </Link>
          <Link className="mx-auto" href="#link3">
            <svg
              className="w-16 h-16"
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>
            </svg>
          </Link>
        </div>
      </div>

      <hr className="mt-10" />

      {/* ABOUT TITLE */}
      <div id="about" className="p-10 bg-black">
        <h2 className="text-center font-bold text-white text-md md:text-3xl">
          About
        </h2>
      </div>

      {/* ABOUT CONTENT*/}
      <div className="mt-10">
        <div className="pl-7 md:pl-32 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">WHAT IS HG DAPP ACTUALLY?</div>
        <div id="aboutTextWrapper" className="px-7 md:px-32">
          <p className="text-justify border border-black px-4 rounded-lg">
            A decentralized application (DApp) is a software application that
            operates on a decentralized network, leveraging blockchain or other
            distributed ledger technologies to function without a central
            authority. Unlike traditional applications where data and control
            are housed in a centralized server or entity, DApps distribute these
            functions across a network of nodes, ensuring transparency,
            security, and censorship resistance. Smart contracts, which are
            self-executing contracts with the terms of the agreement directly
            written into code, often power DApps, enabling automated and
            trustless transactions. Decentralized applications have gained
            popularity due to their potential to eliminate intermediaries,
            increase user privacy, and create more resilient systems that are
            less prone to censorship or single points of failure. They find
            application in various fields such as finance, supply chain
            management, social media, gaming, and more, promising to
            revolutionize industries by providing decentralized alternatives to
            traditional centralized systems.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-10 bg-black text-white p-3 text-xs text-center sm:text-sm md:text-lg lg:text-xl">hg's content - follow me on instagram @afrinataaa</footer>
    </div>
  );
}

export default Home;

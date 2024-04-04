"use client";
import { Button } from "@/components/ui/button";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { AccountContext } from "./context/context";
import { InfuraProvider } from "ethers";

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
    <div className="container font-mono pr-0 pl-0">
      <div className="text-center text-3xl font-bold sm:text-left bg-black text-white pt-4 pb-4 sm:pl-4 sm:mt-2 sm:mx-3 sm:rounded-xl ">
        HG DAPP
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
            <Button onClick={connect}>Connect your wallet</Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button onClick={disconnect}>Disconnect Wallet</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="title mt-10 font-extrabold text-5xl text-center">Hi!</div>
      {account ? (
        <div className="title text-md text-center">{account}</div>
      ) : (
        <div className="title text-md text-center">guest</div>
      )}
    </div>
  );
}

export default Home;

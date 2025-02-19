"use client";

import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import eventBus, { EVENTS} from '../config/EventBus';
import { useWallet } from "../context/WalletContext";

let walletsIcons = [
  { id: "com.okex.wallet",icon: "/icons/metamask.png"},
  { id: "io.metamask", icon: "/icons/metamask.png",},
  { id: "coinbaseWalletSDK", icon: "/icons/coinbase.png"},
  { id: "walletConnect", icon: "/icons/walletconnect.png"},
];

export default function WalletList() {
    const {connectors, connect} = useWallet()
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        const openModalHandler = () => setIsOpen(true);
        const closeModalHandler = () => setIsOpen(false);

        eventBus.on(EVENTS.OPEN_WALLET_MODEL, openModalHandler)
        eventBus.on(EVENTS.CLOSE_WALLET_MODEL, closeModalHandler)

        return () =>{
            eventBus.off(EVENTS.OPEN_WALLET_MODEL, openModalHandler)
            eventBus.off(EVENTS.CLOSE_WALLET_MODEL, closeModalHandler)
        }
    },[])

    // Convert connectors to a Map for quick lookup

    return (
        <>
        {isOpen && (
            <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setIsOpen(false)}
            >
            <div 
                className="bg-white p-6 rounded-lg w-80 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-lg font-semibold text-center mb-4">Select a Wallet</h2>

                {/* Wallet List */}
                {connectors.map((connector) => {
                return (
                    <div key={connector.id} className="flex items-center justify-between p-3 border-b">
                    {connector.icon && <img src={connector.icon} alt={connector.name} className="w-8 h-8" /> }
                    <span className="flex-1 ml-3 font-medium">{connector.name}</span>
                    <button 
                        className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        onClick={() => connect({ connector })}
                        >
                        Open
                    </button>
                    </div>
                );
                })}

                {/* Close Button */}
                <button 
                onClick={() => setIsOpen(false)} 
                className="mt-4 w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                Close
                </button>
            </div>
            </div>
        )}
        </>
    );
}

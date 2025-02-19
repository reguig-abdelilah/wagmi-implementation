'use client';
import { createContext, useContext, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { getChainId } from '@wagmi/core'
import { WagmiConfig } from '../config/WagmiConfig';

const WalletContext = createContext();
export const WalletProvider = ({ children }) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const getActiveChainName = () => {
    const chainId = getChainId(WagmiConfig);  // Get the current chain ID
    const chain = WagmiConfig.chains.find((c) => c.id === chainId);
    return chain?.name || 'Unknown Chain';  // Return the chain's name or a fallback
  }

  return (
    <WalletContext.Provider value={{ address, isConnected, connect, disconnect, connectors, getActiveChainName }}>
        {children}
    </WalletContext.Provider>
  );
};
export const useWallet = () => useContext(WalletContext);
'use client';
import Link from 'next/link';
// import { useWallet } from '@/context/WalletContext';
import { useWallet } from '../context/WalletContext';
import eventBus, { EVENTS} from '../config/EventBus';
import DropdownLogout from './DropdownLogout';

const Navbar = () => {
  const { address, isConnected, connect, disconnect, connectors, getActiveChainName } = useWallet();
  console.log(getActiveChainName())
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center text-white">
      <div className="text-lg font-bold">Tokenization App</div>
      <div className="space-x-4">
        
        {!isConnected ? (
          <button onClick={() => eventBus.emit(EVENTS.OPEN_WALLET_MODEL)} className="bg-blue-500 px-4 py-2 rounded">Connect Wallet</button>
        ) : (
            <>
              <Link href="/" className="hover:text-gray-400">Home</Link>
              <Link href="/tokenize" className="hover:text-gray-400">Tokenize</Link>
              <Link href="/assets" className="hover:text-gray-400">My Assets</Link>
              <Link href="/transactions" className="hover:text-gray-400">Transactions</Link>
              {/* <button onClick={disconnect} className="bg-red-500 px-4 py-2 rounded">Disconnect</button> */}
              <DropdownLogout address={address} activeChain={getActiveChainName()} disconnect={disconnect}/>
            </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
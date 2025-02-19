import { useState } from 'react';

const DropdownLogout = ({ address, activeChain, disconnect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  function ShortenAddress(address) {
    if (!address || address.length < 8) return address; // Handle invalid addresses
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  }
  return (
    <div className="relative inline-block">
      <button 
        onClick={toggleDropdown} 
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2"
      >
        <span>{ShortenAddress(address)}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="p-2">
            {/* Active Chain */}
            <p className="text-sm text-gray-700">Chain: {activeChain}</p>
          </div>
          <div className="p-2">
            {/* Disconnect Button */}
            <button
              onClick={disconnect}
              className="w-full text-red-500 px-4 py-2 rounded hover:bg-gray-100"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownLogout;

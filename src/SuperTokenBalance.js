// SuperTokenBalance.js
import React, { useState, useEffect } from "react";
import { getSuperTokenBalance } from "./api"; // Replace with your actual API call

const SuperTokenBalance = ({ address }) => {
  const [balance, setBalance] = useState("Loading...");

  useEffect(() => {
    const fetchBalance = async () => {
      const fetchedBalance = await getSuperTokenBalance(address);
      setBalance(fetchedBalance.availableBalance);
    };

    // Initial fetch
    fetchBalance();

    // Set up an interval for live updating
    const interval = setInterval(fetchBalance, 2000); // Update every 2 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [address]);

  return <span className="token-balance"> {balance} mOx</span>;
};

export default SuperTokenBalance;

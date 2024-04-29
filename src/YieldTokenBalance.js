// YieldTokenBalance.js
import React, { useState, useEffect } from "react";
import { getYieldTokenBalance } from "./api"; // Replace with your actual API call

const YieldTokenBalance = ({ address }) => {
  const [balance, setBalance] = useState("Loading...");

  useEffect(() => {
    const fetchBalance = async () => {
      const fetchedBalance = await getYieldTokenBalance(address);
      setBalance(fetchedBalance);
    };

    fetchBalance(); // Fetch on component mount
  }, [address]); // Depend on the address so it refetches if the address changes

  return <span className="token-balance">{balance * 10 ** 14} mOy</span>;
};

export default YieldTokenBalance;

import React, { useState } from "react";
import Header from "./Header"; // Assuming you have Header.js for the input and add button
import BalanceTable from "./BalanceTable"; // Assuming you have BalanceTable.js for displaying the addresses and balances
import "@fontsource/inter";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

const App = () => {
  const [addresses, setAddresses] = useState([]);

  const addAddress = (newAddress) => {
    // Prevent adding duplicates or empty strings
    if (newAddress && !addresses.includes(newAddress)) {
      setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    }
  };

  const removeAddress = (addressToRemove) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((address) => address !== addressToRemove)
    );
  };

  const swapperAdmin = "0x1cbF9Cd6BEfAc2A0b7F8f6a1c5cDfc160636E6D0";
  const stableSuperToken = "0xAe4E6F202EB3cCFB3fB948D1CCfe38b6F2Cd2253";

  return (
    <div className="App">
      <Header onAddAddress={addAddress} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: 5,
          my: 3,
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Typography level="h4" variant="soft" sx={{ marginRight: 2 }}>
            Swapper Admin
          </Typography>
          <Typography level="h4">
            <a href={`https://sepolia.etherscan.io/address/${swapperAdmin}`}>
              {swapperAdmin.slice(0, 6)}...{swapperAdmin.slice(-4)}
            </a>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Typography level="h4" variant="soft" sx={{ marginRight: 2 }}>
            Stable Super Token
          </Typography>
          <Typography level="h4">
            <a
              href={`https://sepolia.etherscan.io/address/${stableSuperToken}`}
            >
              {stableSuperToken.slice(0, 6)}...{stableSuperToken.slice(-4)}
            </a>
          </Typography>
        </Box>
      </Box>
      <BalanceTable addresses={addresses} onRemoveAddress={removeAddress} />
    </div>
  );
};

export default App;

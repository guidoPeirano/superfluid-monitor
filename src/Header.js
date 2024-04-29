import React, { useState } from "react";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";

const Header = ({ onAddAddress }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    onAddAddress(inputValue.trim());
    setInputValue(""); // Clear the input field after adding
  };

  const handleKeyPress = (e) => {
    // It allows the user to press Enter to add the address
    if (e.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        margin: "auto",
        justifyContent: "space-evenly",
        marginTop: "5rem",
        marginBottom: "4rem",
        width: "50%",
      }}
    >
      <Input
        color="neutral"
        placeholder="Add new address"
        size="md"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        sx={{ flex: 1 }}
      />
      <Button
        onClick={handleAddClick}
        variant="solid"
        sx={{ mx: 2, width: "5rem" }}
      >
        Add
      </Button>
    </Box>
  );
};

export default Header;

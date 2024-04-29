// DeleteButton.js
import React from "react";
import Button from "@mui/joy/Button";

const DeleteButton = ({ onRemoveAddress }) => {
  return (
    <Button color="danger" onClick={onRemoveAddress}>
      Delete
    </Button>
  );
};

export default DeleteButton;

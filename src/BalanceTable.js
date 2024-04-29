// BalanceTable.js
import React from "react";
import BalanceRow from "./BalanceRow";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

const BalanceTable = ({ addresses, onRemoveAddress }) => {
  return (
    <Sheet sx={{ minWidth: "80%", mx: 5, borderRadius: 10 }} variant="outlined">
      <Table
        borderAxis="xBetween"
        color="neutral"
        size="md"
        stickyFooter={false}
        stickyHeader
        variant="plain"
      >
        <thead>
          <tr>
            <th>Address</th>
            <th>Super Token Balance</th>
            <th>Yield Tokens Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address, index) => (
            <BalanceRow
              key={index}
              address={address}
              onRemoveAddress={() => onRemoveAddress(address)}
            />
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default BalanceTable;

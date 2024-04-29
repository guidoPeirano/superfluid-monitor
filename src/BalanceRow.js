// BalanceRow.js
import React from "react";
import SuperTokenBalance from "./SuperTokenBalance"; // Placeholder for your balance fetching component
import YieldTokenBalance from "./YieldTokenBalance"; // Placeholder for your balance fetching component
import DeleteButton from "./DeleteButton"; // Placeholder for your delete button component

const BalanceRow = ({ address, onRemoveAddress }) => {
  return (
    <tr className="balance-row">
      <td>
        {address.slice(0, 6)}...{address.slice(-4)}
      </td>
      <td>
        <SuperTokenBalance address={address} />
      </td>
      <td>
        <YieldTokenBalance address={address} />
      </td>
      <td>
        <DeleteButton onRemoveAddress={() => onRemoveAddress(address)} />
      </td>
    </tr>
  );
};

export default BalanceRow;

import React from "react";
import "../css/cost-display.css";
const CostDisplay = ({ costs, totalCost, customerCharge }) => {
  const profit = customerCharge - totalCost;
  return (
    <div className="cost-display">
      <h2>Cost Breakdown</h2>
      <ul>
        {Object.entries(costs).map(([key, value]) => (
          <li key={key}>{`${key}: $${value.toFixed(2)}`}</li>
        ))}
      </ul>
      <p className="total-cost">
        Total Twilio Cost: <strong>${totalCost.toFixed(2)}</strong>
      </p>
      <p className="customer-charge">
        Charge to Customer: <strong>${customerCharge.toFixed(2)}</strong>
      </p>
      <p className="profit-display">
        Profit: <strong>${profit.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default CostDisplay;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import pricingPlanItems from "./assets/pricing-plan.json";
import transactions from "./assets/transactions.json";
import stats from "./assets/stats.json";
import user from "./assets/user.json";

ReactDOM.render(
  <App
    pricingPlanItems={pricingPlanItems}
    transactions={transactions}
    stats={stats}
    user={user}
  />,
  document.getElementById("root"),
);

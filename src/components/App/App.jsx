import React from "react";
import PricingPlan from "../PricingPlan/PricingPlan";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Stats from "../Stats/Stats";
import Profile from "../Profile/Profile";
import pricingPlanItems from "../../assets/pricing-plan.json";
import transactions from "../../assets/transactions.json";
import stats from "../../assets/stats.json";
import user from "../../assets/user.json";

const App = () => (
  <div>
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transactions} />
    <Stats title="Upload stats" stats={stats} />
    <Profile user={user} />
  </div>
);

export default App;

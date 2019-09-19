import React from "react";
import PropTypes from "prop-types";
import PricingPlan from "./PricingPlan/PricingPlan";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Stats from "./Stats/Stats";
import Profile from "./Profile/Profile";

const App = ({ pricingPlanItems, transactions, stats, user }) => {
  return (
    <>
      <PricingPlan items={pricingPlanItems} />
      <TransactionHistory items={transactions} />
      <Stats title="Upload stats" stats={stats} />
      <Profile user={user} />
    </>
  );
};

App.propTypes = {
  pricingPlanItems: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  user: PropTypes.objectOf.isRequired,
};

export default App;

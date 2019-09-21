import React from "react";
import PropTypes from "prop-types";
import { StyledIcon, StyledBtn, StyledHeadline } from "./StyledPricingItem";
import styles from "./PricingItem.module.css";

const PricingItem = ({ label, icon, capacity, price, description }) => {
  return (
    <div className="pricing-item">
      <StyledIcon className={styles.icon} icon={icon} />
      <StyledHeadline className={styles.label} label={label}>
        {label}
      </StyledHeadline>
      <p className={styles.capacity}>{capacity} storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <StyledBtn label={label} className={styles.btn} type="button">
        Get Started
      </StyledBtn>
    </div>
  );
};

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;

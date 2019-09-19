import React from "react";
import PropTypes from "prop-types";
import { inlineColorStyle } from "../helpers/helpers";
import styles from "./PricingItem.module.css";

const PricingItem = ({ label, icon, capacity, price, description }) => {
  return (
    <div className="pricing-item">
      <i
        className={styles.icon}
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
      <h2 className={styles.label} style={{ color: inlineColorStyle[label] }}>
        {label}
      </h2>
      <p className={styles.capacity}>{capacity} storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button
        className={styles.btn}
        style={{ background: inlineColorStyle[label] }}
        type="button">
        Get Started
      </button>
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

import React from "react";
import PropTypes from "prop-types";
import StyledItem from "./StyledStas";
import styles from "./Stats.module.css";

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statsSection}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(item => (
          <StyledItem
            className={styles.item}
            key={item.id}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </StyledItem>
        ))}
      </ul>
    </section>
  );
};

Stats.defaultProps = {
  title: null,
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;

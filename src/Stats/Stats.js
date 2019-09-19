import React from "react";
import PropTypes from "prop-types";
import { backgroundColorGenerator } from "../helpers/helpers";
import styles from "./Stats.module.css";

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statsSection}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(item => (
          <li
            className={styles.item}
            key={item.id}
            style={{
              background: `#${backgroundColorGenerator()}`,
            }}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
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

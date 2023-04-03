import PropTypes from 'prop-types';
import css from '../Statistics/StatItem.module.css';

const StatItem = ({ statLabel, percentage }) => {
  return (
    <li className={css.statItem}>
      <span className="label">{statLabel}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
export default StatItem;

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

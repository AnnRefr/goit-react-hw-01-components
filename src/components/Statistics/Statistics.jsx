import PropTypes from 'prop-types';
import StatItem from './StatItem';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className={css.statTitle}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatItem
            key={id}
            id={id}
            statLabel={label}
            percentage={percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;

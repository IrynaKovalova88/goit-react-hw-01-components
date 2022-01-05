import PropTypes from "prop-types";
import StatisticsList from "./StatisticsList";
import "./Statistics.css";

export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      <h2 className="title-statistic">{title}</h2>
      <ul className="stat-list">{stats.map(StatisticsList)}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

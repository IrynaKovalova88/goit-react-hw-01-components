import PropTypes from "prop-types";
import "./StatisticsList.css";
import { getRandomHexColor } from "../../helpers/RandomColor";

export default function StatisticsList({ id, label, percentage }) {
  return (
    <li
      className="item-statistic"
      key={id}
      style={{ backgroundColor: `${getRandomHexColor()} ` }}
    >
      <span className="label-statistic">{label}</span>
      <span className="percentage-statistic">{percentage}%</span>
    </li>
  );
}

StatisticsList.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

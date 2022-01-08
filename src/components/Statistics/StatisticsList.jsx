import PropTypes from "prop-types";
import {
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from "./Statistics.styled";
import { getRandomHexColor } from "../../helpers/RandomColor";

export default function StatisticsList({ id, label, percentage }) {
  return (
    <StatisticsItem
      key={id}
      style={{ backgroundColor: `${getRandomHexColor()} ` }}
    >
      <StatisticsLabel>{label}</StatisticsLabel>
      <StatisticsPercentage>{percentage}%</StatisticsPercentage>
    </StatisticsItem>
  );
}

StatisticsList.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

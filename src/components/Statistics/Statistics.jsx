import PropTypes from "prop-types";
import StatisticsList from "./StatisticsList";
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticList,
} from "./Statistics.styled";

export default function Statistics({ stats, title }) {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticList>{stats.map(StatisticsList)}</StatisticList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

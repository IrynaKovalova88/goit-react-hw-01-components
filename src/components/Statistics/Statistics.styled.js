import styled from "styled-components";

export const StatisticsSection = styled.section`
  width: 450px;
  margin: 30px auto;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(34, 60, 80, 0.2);
  background-color: #fff;
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: 20px;
  font-size: 1.6rem;
  -webkit-text-stroke: 2px rgba(30, 35, 61, 0.787);
  -webkit-text-fill-color: transparent;
`;

export const StatisticList = styled.ul`
  display: flex;
  border-radius: 5px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 15px;
  box-shadow: 0px 2px 10px 2px rgba(34, 60, 80, 0.2);
  :first-child {
    border-bottom-left-radius: 5px;
  }
  :last-child {
    border-bottom-right-radius: 5px;
  }
`;

export const StatisticsLabel = styled.span`
  font-size: 1.2rem;
  color: #ecececca;
`;

export const StatisticsPercentage = styled.span`
  font-size: 1.4rem;
  color: #ececec;
`;

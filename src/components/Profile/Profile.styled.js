import styled from "styled-components";

export const ProfileDiv = styled.div`
  width: 370px;
  background-color: #fff;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(34, 60, 80, 0.2);
`;

export const ProfileDescription = styled.div`
  padding: 40px 15px;
  text-align: center;
`;

export const ProfileAvatar = styled.img`
  display: block;
  width: 200px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 2px 10px 2px rgba(34, 60, 80, 0.2);
  background-color: rgba(137, 237, 248, 0.2);
`;

export const ProfileName = styled.p`
  margin-top: 24px;
  margin-bottom: 14px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #192e49;
`;

export const ProfileTag = styled.p`
  margin-bottom: 14px;
  font-size: 1.1rem;
  color: #415162;
`;

export const ProfileLocation = styled.p`
  font-size: 1.1rem;
  color: #415162;
`;

export const ProfileStats = styled.ul`
  display: flex;
  font-size: 1.1rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(137, 237, 248, 0.2);
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: 25px;
  align-items: center;
  box-shadow: 1px 1px 3px 1px rgba(33, 33, 33, 0.21);
  border-radius: 10px;
  :hover {
    background-color: #ddd;
  }
`;

export const ProfileLabel = styled.span`
  font-size: 1.1rem;
  color: #415162;
`;

export const ProfileQuantity = styled.span`
  font-weight: 700;
  color: #192e49;
`;

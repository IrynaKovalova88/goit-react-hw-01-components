import styled from "styled-components";

export const Friend = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 450px;
  margin: 30px auto;
  border-radius: 5px;
`;

export const FriendItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px #a5a5a5;
  margin: 3px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? `green` : `red`)};
  margin: 10px;
`;

export const FriendAvatar = styled.img`
  display: block;
  width: 48px;
  height: auto;
`;

export const FriendName = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  margin-left: 15px;
`;

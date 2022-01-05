import PropTypes from "prop-types";
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from "./FriendList.styled";

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <FriendItem key={id}>
      <FriendStatus status={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

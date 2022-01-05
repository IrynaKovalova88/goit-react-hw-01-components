import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import { Friend } from "./FriendList.styled";

export default function FriendList({ friends }) {
  return <Friend>{friends.map(FriendListItem)}</Friend>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

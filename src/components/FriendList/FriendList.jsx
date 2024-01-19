import css from "../FriendList/FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friend-list"]}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.card}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export { FriendList };

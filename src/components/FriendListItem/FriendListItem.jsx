import css from "../FriendListItem/FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="item">
      <img className={css.avatar} src={avatar} alt="Avatar" width="100" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx("status", {
          [css.green]: isOnline,
          [css.red]: !isOnline,
        })}
      >
        {isOnline?'Online':'Offline'}
      </p>
    </div>
  );
};

import css from '../Profile/Profile.module.css'
export const Profile = ({name,tag,location,image,stats}) => {
    return (
      <div className={css.profile}>
    <div className={css.description}>
      <img
        src={image}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
  
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.value}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.value}>{stats.views}</span>
      </li>
      <li>        
        <span className={css.label}>Likes</span>

        <span className={css.value}>{stats.likes}</span>
      </li>
    </ul>
  </div>
    );
  };
  
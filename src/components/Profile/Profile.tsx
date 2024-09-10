import { FC } from "react";
import "./Profile.css";

type TProfile = {
  name: string;
  win: number;
  rank: number;
  avatar?: string;
};

// TODO изменить склонение "побед" в зависимости от количества

export const Profile: FC<TProfile> = (props) => {
  const { name, win, rank, avatar } = props;

  return (
    <div className="profile">
      <div className="profile__inner">
        <div className="profile__avatar">
          {avatar && <img src={avatar} alt="Avatar" />}
        </div>
        <div className="profile__info">
          <div className="profile__name">{name}</div>
          <div className="profile__stats">{win} побед</div>
        </div>
        <div className="profile__rank">#{rank}</div>
      </div>
    </div>
  );
};

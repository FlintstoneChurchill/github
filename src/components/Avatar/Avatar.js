import React from "react";
import defaultAvatar from "../../assets/img/default_avatar.jpg";
import "./Avatar.css";

const Avatar = ({user}) => {
  let avatar = defaultAvatar;
  if (user.avatar_url) avatar = user.avatar_url;
  return (
    <img className="Avatar" src={avatar} alt={user.login}/>
  );
};

export default Avatar;
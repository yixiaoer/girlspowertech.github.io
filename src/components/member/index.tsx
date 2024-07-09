import React, { FC } from "react";
import "./style.scss";
import Avatar from "@assets/avatar.png";

type memberProps = {
  name: string
  avatar?: string
}

const Member: FC<memberProps> = ({ name, avatar }) => {
  if (!name) {
    return <div className="notice">

←  CLICK LEFT TO SELECT A MEMBER
    </div>
  }
  return (
    <div className="member">
      <div className="meta">
        <img className="avatar" src={ avatar || Avatar } alt={ name } />
        <p className="name">{ name }</p>
      </div>
      <div className="intro">
        Blabala  balabala  balabala  babababaaa lalallalala balabala
        balabala balabala
        balabala balabala
      </div>
    </div>
  );
}

export default Member;

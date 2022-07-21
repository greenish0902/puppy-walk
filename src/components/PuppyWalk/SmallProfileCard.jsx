/**
 * @filename SmallProfileCard.jsx
 * @description 프로필카드 축약형
 * @author 박정모 (oooperbjm@gmail.com)
 */

import React from 'react';
import styled from 'styled-components';
import '../../assets/scss/palette.scss';

const SmallProfileCardContainer = styled.div`
  width: 150px;
  height: 100px;
  position: relative;
  margin: 20px 10px 0 10px;

  .img-wrapper {
    width: 150px;
    height: 100px;
    border-radius: 15px;
    background-color: var(--color-mint-green-1);
  }

  .info {
    margin: 5px;
    position: absolute;
    top: 0;
  }
  p {
    font-size: 0.7em;
    width: 140px;
    padding-left: 5px;

    &:nth-child(1) {
      font-size: 0.8em;
      text-align: center;
      padding: 0;
    }

    &:last-child {
      font-size: 0.8em;
      text-align: center;
      padding: 0;
    }
  }

  .profile-image {
    position: absolute;
    top: 25px;
    right: 5px;
    width: 50px;
    height: 50px;
    background-color: var(--color-mint-green-3);
  }
`;
const SmallProfileCard = ({
  nickname,
  sort,
  age,
  walktime,
  location,
  owner,
}) => {
  return (
    <>
      <SmallProfileCardContainer>
        <div className="img-wrapper">
          <div className="fake-image"></div>
        </div>
        <div className="info">
          <p>{nickname}</p>
          <p>
            {sort} {age}
          </p>
          <p>{walktime}</p>
          <p>{owner}</p>
          <p>{location}</p>
        </div>
        <div className="profile-image"></div>
      </SmallProfileCardContainer>
    </>
  );
};

export default SmallProfileCard;

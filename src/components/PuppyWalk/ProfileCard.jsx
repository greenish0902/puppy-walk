/**
 * @filename ProfileCard.jsx
 * @description 프로필카드 확장형
 * @author 박정모 (oooperbjm@gmail.com)
 */

import React from 'react';
import styled from 'styled-components';
import '../../assets/scss/palette.scss';

const ProfileCardContainer = styled.div`
  position: relative;

  .img-wrapper {
    margin: auto;
    width: 330px;
    position: relative;

    img {
      width: 100%;
    }

    .fake-image {
      border-radius: 20px;
      width: 330px;
      height: 211px;
      background-color: var(--color-mint-green-1);
    }
  }

  .info {
    width: 330px;
    position: absolute;
    top: 0;

    .text-wrapper {
      margin: auto;
      width: 300px;

      h3 {
        display: block;
        position: relative;
        font-size: 1em !important;
        margin: 3px auto;
        text-align: center;
        padding: 0 !important;
      }

      p {
        font-size: 12px;
        padding: 0 0 0 10px;
      }
    }

    .profile-image {
      width: 100px;
      height: 100px;
      background-color: var(--color-mint-green-3);
      position: absolute;
      right: 0;
      top: 35px;
    }
  }
`;

const ProfileCard = ({
  nickname,
  sort,
  sortDetail,
  age,
  character,
  neutering,
  owner,
  walktime,
  memo,
  location,
}) => {
  return (
    <ProfileCardContainer>
      <div className="img-wrapper">
        <div className="fake-image"></div>
      </div>
      <div className="info">
        <div className="text-wrapper">
          <h3>{nickname}</h3>
          <p>
            견종: {sort} &gt; {sortDetail}
          </p>
          <p>나이: {age}</p>
          <p>성격: {character}</p>
          <p>중성화: {neutering}</p>
          <p>견주: {owner}</p>
          <p>산책시간: {walktime}</p>
          <p>메모: {memo}</p>
          <h3>{location}</h3>
        </div>
        <div className="profile-image"></div>
      </div>
    </ProfileCardContainer>
  );
};

export default ProfileCard;

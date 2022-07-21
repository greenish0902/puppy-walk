import React, { memo } from 'react';
import SmallProfileCard from '../../components/PuppyWalk/SmallProfileCard';
import styled from 'styled-components';
import ButtonWrapper from '../../components/ButtonWrapper';
import { ImBubble, ImUserMinus, ImHeart, ImEnlarge } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/palette.scss';

const MateManageContainer = styled.div`
  padding-bottom: 60px;
  .content-container {
    display: flex;
    flex-direction: column;

    .head-wrapper {
      position: relative;
      background-color: var(--color-green-2);

      h3 {
        font-size: 1.1em;
        text-align: center;
        padding: 5px 0;
      }

      svg {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
      }

      p {
        position: absolute;
        right: 35px;
        top: 9px;
        font-size: 0.8em;
        background-color: white;
        padding: 0 5px;
        border-radius: 5px;
      }
    }

    .card-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .single-card {
        display: flex;
        flex-direction: column;

        .btn-wrapper {
          display: flex;
          justify-content: center;
          padding-top: 5px;

          button {
            margin: 2px;
          }
        }
      }
    }
  }
`;

const MateManage = memo(() => {
  return (
    <MateManageContainer>
      <div className="content-container">
        <div className="head-wrapper">
          <h3>메이트 관리</h3>
          <NavLink to="/puppywalk/mateconfirm">
            <p>+1</p>
            <ImHeart color="var(--color-pink)" />
          </NavLink>
        </div>

        <div className="card-wrapper">
          {/* 반복문 처리 */}

          <div className="single-card">
            <SmallProfileCard
              nickname="닉네임입니다."
              sort="소형견"
              age="♀ 1살"
              owner="남, 30대"
              walktime="18:00~20:00"
              location="용인시 기흥구 보정동"
            />

            <div className="btn-wrapper">
            <NavLink to='./detail'>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImEnlarge />
              </ButtonWrapper>
              </NavLink>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImBubble />
              </ButtonWrapper>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="red"
                height="30px"
                padding="10px 15px"
                onClick={e => {
                  window.confirm('메이트를 삭제하시겠습니까?');
                }}
              >
                <ImUserMinus />
              </ButtonWrapper>
            </div>
          </div>
          <div className="single-card">
            <SmallProfileCard
              nickname="닉네임입니다."
              sort="소형견"
              age="♀ 1살"
              owner="남, 30대"
              walktime="18:00~20:00"
              location="용인시 기흥구 보정동"
            />

            <div className="btn-wrapper">
              <NavLink to='./detail'>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImEnlarge />
              </ButtonWrapper>
              </NavLink>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImBubble />
              </ButtonWrapper>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="red"
                height="30px"
                padding="10px 15px"
                onClick={e => {
                  window.confirm('메이트를 삭제하시겠습니까?');
                }}
              >
                <ImUserMinus />
              </ButtonWrapper>
            </div>
          </div>
          <div className="single-card">
            <SmallProfileCard
              nickname="닉네임입니다."
              sort="소형견"
              age="♀ 1살"
              owner="남, 30대"
              walktime="18:00~20:00"
              location="용인시 기흥구 보정동"
            />

            <div className="btn-wrapper">
              <NavLink to='./detail'>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImEnlarge />
              </ButtonWrapper>
              </NavLink>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImBubble />
              </ButtonWrapper>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="red"
                height="30px"
                padding="10px 15px"
                onClick={e => {
                  window.confirm('메이트를 삭제하시겠습니까?');
                }}
              >
                <ImUserMinus />
              </ButtonWrapper>
            </div>
          </div>
          <div className="single-card">
            <SmallProfileCard
              nickname="닉네임입니다."
              sort="소형견"
              age="♀ 1살"
              owner="남, 30대"
              walktime="18:00~20:00"
              location="용인시 기흥구 보정동"
            />

            <div className="btn-wrapper">
              <NavLink to='./detail'>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImEnlarge />
              </ButtonWrapper>
              </NavLink>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImBubble />
              </ButtonWrapper>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="red"
                height="30px"
                padding="10px 15px"
                onClick={e => {
                  window.confirm('메이트를 삭제하시겠습니까?');
                }}
              >
                <ImUserMinus />
              </ButtonWrapper>
            </div>
          </div>
          <div className="single-card">
            <SmallProfileCard
              nickname="닉네임입니다."
              sort="소형견"
              age="♀ 1살"
              owner="남, 30대"
              walktime="18:00~20:00"
              location="용인시 기흥구 보정동"
            />

            <div className="btn-wrapper">
              <NavLink to='./detail'>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImEnlarge />
              </ButtonWrapper>
              </NavLink>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImBubble />
              </ButtonWrapper>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="red"
                height="30px"
                padding="10px 15px"
                onClick={e => {
                  window.confirm('메이트를 삭제하시겠습니까?');
                }}
              >
                <ImUserMinus />
              </ButtonWrapper>
            </div>
          </div>
          <div className="single-card">
            <SmallProfileCard
              nickname="닉네임입니다."
              sort="소형견"
              age="♀ 1살"
              owner="남, 30대"
              walktime="18:00~20:00"
              location="용인시 기흥구 보정동"
            />

            <div className="btn-wrapper">
              <NavLink to='./detail'>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImEnlarge />
              </ButtonWrapper>
              </NavLink>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImBubble />
              </ButtonWrapper>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="red"
                height="30px"
                padding="10px 15px"
                onClick={e => {
                  window.confirm('메이트를 삭제하시겠습니까?');
                }}
              >
                <ImUserMinus />
              </ButtonWrapper>
            </div>
          </div>
          <div className="single-card">
            <SmallProfileCard
              nickname="닉네임입니다."
              sort="소형견"
              age="♀ 1살"
              owner="남, 30대"
              walktime="18:00~20:00"
              location="용인시 기흥구 보정동"
            />

            <div className="btn-wrapper">
              <NavLink to='./detail'>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImEnlarge />
              </ButtonWrapper>
              </NavLink>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImBubble />
              </ButtonWrapper>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="red"
                height="30px"
                padding="10px 15px"
                onClick={e => {
                  window.confirm('메이트를 삭제하시겠습니까?');
                }}
              >
                <ImUserMinus />
              </ButtonWrapper>
            </div>
          </div>
          <div className="single-card">
            <SmallProfileCard
              nickname="닉네임입니다."
              sort="소형견"
              age="♀ 1살"
              owner="남, 30대"
              walktime="18:00~20:00"
              location="용인시 기흥구 보정동"
            />

            <div className="btn-wrapper">
              <NavLink to='./detail'>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImEnlarge />
              </ButtonWrapper>
              </NavLink>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="green-2"
                height="30px"
                padding="10px 15px"
              >
                <ImBubble />
              </ButtonWrapper>
              <ButtonWrapper
                width="fit-content"
                color="white"
                bgColor="red"
                height="30px"
                padding="10px 15px"
                onClick={e => {
                  window.confirm('메이트를 삭제하시겠습니까?');
                }}
              >
                <ImUserMinus />
              </ButtonWrapper>
            </div>
          </div>
        </div>
      </div>
    </MateManageContainer>
  );
});

export default MateManage;

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAxios from 'axios-hooks';
import sample from "../../assets/img/dog.png";

const CommunityGeneralContainer = styled.div`
  padding-top: 45px;
  //background-color: green;

  .board-nav {
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: black;
      line-height: 40px;
    }
  }

  .tab-nav {
    display: flex;
    height: 30px;
    flex-direction: row;
    justify-content: space-around;

    p {
      font-size: 0.8em;
      line-height: 30px;
      cursor: pointer;
    }
  }

  .sort {
    display: flex;
    position: relative;

    select {
      border: none;
      background-color: #eee;
      width: fit-content;
      margin: 5px 10px;
      font-size: 0.7em;
      cursor: pointer;
      border-radius: 0; /* 아이폰 사파리 보더 없애기 */
      -webkit-appearance: none; /* 화살표 없애기 for chrome*/
      -moz-appearance: none; /* 화살표 없애기 for firefox*/
      appearance: none;
    }

    div {
      position: absolute;
      right: 10px;
      top: -2px;

      input {
        width: 80px;
        height: 13px;
      }

      svg {
        width: 13%;
        position: relative;
        top: 2px;
        left: 4px;
      }
    }
  }

  .listWrapper {
    width: 340px;
    margin: auto;
    display: flex;
    cursor: pointer;

    .imgWrapper {
      width: 40px;
      height: 40px;
      margin: 5px 10px;
      background-color: var(--color-gray);

      img {
        width: 100%;
      }
    }

    .textWrapper {
      margin-top: 5px;
      overflow: hidden;

      .title {
        font-size: 0.9em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
      }

      .info {
        font-size: 0.7em;
      }
    }

    &:after {
      display: block;
    }
`

const CommunityGeneral = () => {

    const [{data,loading,error}, refetch] = useAxios('http://localhost:3001/post');

    return (
        <CommunityGeneralContainer>
            <div className='board-nav'>
                <NavLink to='/community/general'>자유게시판</NavLink>
                <NavLink to='/community/kin'>지식in</NavLink>
                <NavLink to='/community/course_recommend'>산책코스추천</NavLink>
            </div>
            <hr/>
            <div className='tab-nav'>
                <p>전체보기</p>
                <p>강아지자랑</p>
                <p>낙서글</p>
                <p>산책후기</p>
                <p>토론</p>
                <p>정보글</p>
            </div>
            <hr/>
            <div className='sort'>
                <select>
                    <option value=''>게시물 수</option>
                    <option value='10'>10개</option>
                    <option value='20'>20개</option>
                    <option value='30'>30개</option>
                    <option value='40'>40개</option>
                    <option value='50'>50개</option>
                </select>
                <select>
                    <option value=''>작성시간순</option>
                    <option value='good'>좋아요 많은 순</option>
                    <option value='comment'>댓글 많은 순</option>
                </select>
                <div>
                    <input type='text'/>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
            </div>
            <hr/>
            <div>
                {data && data.map((v, i) => {
                    return (
                        <>
                            <div className='listWrapper' key={i}>
                                <div className='imgWrapper'><img src={sample} alt='sample'/></div>
                                <div className='textWrapper'>
                                    <p className='title'>{v.title}</p>
                                    <p className='info'>
                                        {v.tag ? v.tag + ' | ' : null}
                                        {v.location ? v.location + ' | ' : null}
                                        {v.authorNickname ? v.authorNickname + ' | ' : null}
                                        {v.date ? v.date : null}
                                    </p>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>

        </CommunityGeneralContainer>
    );
};

export default CommunityGeneral;

import React from 'react';
import styled from 'styled-components';
import useAxios from 'axios-hooks';
import ButtonWrapper from '../ButtonWrapper';
import '../../assets/scss/palette.scss';
import sample from '../../assets/img/dog.png';
import { NavLink } from 'react-router-dom';

const CommunityHomeListContainer = styled.div`
  width: 360px;
  margin: auto;

  h3 {
    font-size: 1em;
    display: block;
    padding-top: 10px;
    margin-left: 10px;
    position: relative;
  }

  hr {
    border: none;
    border-top: 1px solid var(--color-green-gray-1);
    margin: 5px;
  }

  .inner-hr {
    color: var(--color-gray);
    width: 320px;
    margin: auto;

    &:last-child {
      display: none;
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
  }
`;

const ButtonWrapper1 = styled(ButtonWrapper)`
  cursor: pointer;
  display: inline-block;
  margin-left: auto;
  position: absolute;
  right: 12px;
  font-size: 0.8em;
`;

const SingleList = ({ board }) => {
  const URL = 'http://localhost:3001/post';

  const [{ data, loading, error }, refetch] = useAxios(URL);

  const boardList = () => {
    const result = [];
    data &&
      data.map((v, i) => {
        if (v.tab === board) {
          if (result.length < 3) {
            result.push(v);
          } else {
            return;
          }
        }
      });
    // result.map((v, i) => {
    //     return(
    //         <div className='listWrapper'>
    //             <div className='imgWrapper'><img src={sample} alt='sample'/></div>
    //             <div className='textWrapper'>
    //                 <p className='title'>{v.title}</p>
    //                 <p className='info'>강아지 자랑</p>
    //             </div>
    //         </div>
    //     )
    // })
    console.log(result);
    return result;
  };

  return (
    <>
      {data &&
        boardList().map((v, i) => {
          return (
            <>
              <div className="listWrapper" key={i}>
                <div className="imgWrapper">
                  <img src={sample} alt="sample" />
                </div>
                <div className="textWrapper">
                  <p className="title">{v.title}</p>
                  <p className="info">
                    {v.tag ? v.tag + ' | ' : null}
                    {v.location ? v.location + ' | ' : null}
                    {v.authorNickname ? v.authorNickname + ' | ' : null}
                    {v.date ? v.date : null}
                  </p>
                </div>
              </div>
              <hr className="inner-hr" />
            </>
          );
        })}
      {/*{data && data.map((v, i) => {*/}
      {/*    return (*/}
      {/*        <div className='listWrapper'>*/}
      {/*            <div className='imgWrapper'><img src={sample} alt='sample'/></div>*/}
      {/*            <div className='textWrapper'>*/}
      {/*                <p className='title'>{v.title}</p>*/}
      {/*                <p className='info'>강아지 자랑</p>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    )*/}
      {/*})}*/}
    </>
    // <div className='listWrapper'>
    //     <div className='imgWrapper'><img src={sample} alt='sample'/></div>
    //     <div className='textWrapper'>
    //         <p className='title'>안녕ssssssssssssssssssssssssssssssssssssssssss</p>
    //         <p className='info'>강아지 자랑</p>
    //     </div>
    // </div>
  );
};

const CommunityHomeList = ({ board, link, children }) => {
  return (
    <CommunityHomeListContainer>
      <h3>
        {children}{' '}
        <NavLink to={`./${link}`}>
          {' '}
          <ButtonWrapper1
            color="white"
            bgColor="green-2"
            width="fit-content"
            padding="1px 5px"
          >
            전체보기
          </ButtonWrapper1>
        </NavLink>
      </h3>
      <hr />
      <SingleList board={board} />
    </CommunityHomeListContainer>
  );
};

export default CommunityHomeList;

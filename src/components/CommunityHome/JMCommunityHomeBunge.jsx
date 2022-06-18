import React from 'react';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import '../assets/scss/palette.scss';

import useAxios from 'axios-hooks';

const HomeBunge = styled.div`
    width: 360px;
  height: 200px;
  background-color: #eee;
  margin: 40px auto;
  
  h3{
    font-size: 1em;
    display: block;
    margin: 10px;
    padding-top: 10px;
  }
  
  div {
    width: 340px;
    height: 140px;
    padding-bottom: 10px;
    background-color: #feffe2;
    margin: auto;
    position: relative;
    border-radius: 10px;
    
    p{
      margin: 0 10px;
      padding-top: 5px;
      font-size: .7em;
      text-align: right;
    }

    p:nth-child(2) {
      padding: 0;
      font-size: .8em;
    }
    
    p:nth-child(3) {
      padding: 0;
      margin: 0 10px;
      font-size: .9em;
      text-align: center;
    }
    
    button {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`

const URL = 'http://localhost:3001/bunge'

const CommunityHome = () => {
    const [{data, loading, error}, refetch] = useAxios(URL);
    React.useEffect(() => {
        data && data.map(({content}, i) => {
          console.log(content);
        });
    })
    return (
        <>
         <HomeBunge>
            <h3>⚡산책 번개</h3>
            <div>
                <p>{data && data[0].location} | {data && data[0].date}</p>
                <p>{data && data[0].authorNickname}</p>
                <p>{data && data[0].content}</p>
                <ButtonWrapper  color="white" bgColor="green-2" width="fit-content" padding="5px">메시지 보내기</ButtonWrapper>
            </div>
         </HomeBunge>
        </>
    );
};

export default CommunityHome;

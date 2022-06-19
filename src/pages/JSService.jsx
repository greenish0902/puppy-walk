/**
 * @filename JSService.jsx
 * @description 고객센터 서비스 소개 페이지
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import src from '../assets/img/dog.png'

import JMFooter from '../components/JMFooter';
import JMHeader from '../components/JMHeader';

const ServiceBox = styled.div`
  width: 360px;
  margin: 80px auto 55px auto;
  text-align: center;

  p {
    margin: 30px 0;
  }

  .subtitle {
    color: rgba(127, 127, 127);
  }

  .title {
    font-size: 28px;
    font-weight: bold;
  }

  img {
    height: 137px;
    width: 137px;
  }

  .textBox {
    width: 340px;
    margin: auto;
    text-align: start;
  }
`
const JSService = memo(() => {
  return (
    <>
      <JMHeader>서비스 소개</JMHeader>
      <ServiceBox>
        <p className='subtitle'>서비스 소개</p>
        <p className='title'>산책하개</p>
        <img src={src} alt="img"/>
        <div className='textBox'>
          <p>
            &nbsp;피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다<br/>
            <br/>
            &nbsp;사랑의 그림자는 천고에 사라지지 않는 것이다 이것은 현저하게 일월과 같은 예가 되려니와 그와 같지 못하다 할지라도 창공에 반짝이는 뭇 별과 같이 산야에 피어나는 군영과 같이 이상은 실로 인간의 부패를 방지하는 소금이라 할지니 인생에 가치를 주는 원질이 되는 것이다 그들은 앞이 긴지라 착목한는 곳이<br/>
            <br/>
            &nbsp;방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는 온갖 과실이 어디 있으랴?
          </p>
        </div>
      </ServiceBox>
      <JMFooter/>
    </>
  );
});

export default JSService;
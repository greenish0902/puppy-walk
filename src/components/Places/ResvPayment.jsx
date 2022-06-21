import React from 'react';
import styled from 'styled-components';

import MainSubTitle from '../Title/MainSubTitle';
import InputBox from '../Home/InputBox';

const ResvPaymentContainer = styled.section`
  width: 100%;
`;

const ResvPayment = () => {
  return (
    <ResvPaymentContainer>
      <hr />
      <div className="box">
        <MainSubTitle more={false}>결제 정보</MainSubTitle>
        <InputBox label="이름" name="name" />
        <InputBox label="이메일" option name="email" />
      </div>
      <hr />
      <div className="box">
        <MainSubTitle more={false}>결제 방법</MainSubTitle>
      </div>
    </ResvPaymentContainer>
  );
};

export default ResvPayment;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import MainSubTitle from '../Title/MainSubTitle';
import InputBox from '../Home/InputBox';
import PlaceFooter from '../../components/Places/PlaceFooter';
import Modal from '../Common/Modal';

const ResvPaymentContainer = styled.section`
  width: 100%;

  .box {
    .cardnum {
      display: flex;
      justify-content: space-between;

      input {
        width: 66px;
      }
    }
  }
`;

const ResvPayment = ({ id }) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const handleModal = event => {
    modal ? setModal(() => false) : setModal(() => true);
  };

  return (
    <>
      <Modal
        msg="결제가 완료되었습니다."
        visible={modal}
        handleClick={() => navigate('/mypage/resv')}
      />
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
          <InputBox label="카드번호" />
          <div className="cardnum">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <InputBox label="비밀번호" name="cardpw" />
        </div>
        <PlaceFooter id={id} btnStr="완료" handleClick={handleModal} />
      </ResvPaymentContainer>
    </>
  );
};

export default ResvPayment;

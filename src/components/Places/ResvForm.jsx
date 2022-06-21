import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import MainSubTitle from '../Title/MainSubTitle';
import OptionItem from './OptionItem';
import InputBox from '../Home/InputBox';
import PlaceFooter from './PlaceFooter';
// import BottomBox from '../Size/BottomBox';

import { FaAngleDoubleLeft } from 'react-icons/fa';

const ResvFormContainer = styled.form`
  width: 100%;
  .bottom {
    width: 100%;
    display: flex;
    align-items: center;
    line-height: 2;
    > div {
      margin-right: 12px;
    }
  }
`;

const ResvForm = ({ data, id }) => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = event => {
    setDate(() => event);
  };

  return (
    data && (
      <ResvFormContainer>
        <hr />
        <MainSubTitle more={false}>선택한 옵션</MainSubTitle>
        <OptionItem item={data.options[0]} freeze={true} />
        <hr />
        <MainSubTitle more={false}>추가정보 입력</MainSubTitle>
        <div className="bottom">
          <div>
            <InputBox label="선택일자" />
            <DatePicker selected={date} onChange={handleDateChange} />
          </div>
          <div>
            <InputBox label="방문예정시각" />
            <input
              className="time"
              type="number"
              step="1"
              min="10"
              max="20"
              defaultValue="17"
            />
          </div>
        </div>
        <hr />
        <MainSubTitle more={false}>예약자 정보</MainSubTitle>
        <div className="infos">
          <InputBox label="예약자명" name="name" />
          <InputBox label="전화번호" name="contact" />
          <InputBox label="이메일" name="email" />
        </div>
        <PlaceFooter
          price={data.price}
          id={data.id}
          btnStr="결제하기"
          to="payment"
        />
      </ResvFormContainer>
    )
  );
};

export default ResvForm;

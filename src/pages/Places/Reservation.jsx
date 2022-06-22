/**
 * @filename Reservation.jsx
 * @description 예약 페이지 홈
 * @author 서소희 greenish0902@gmail.com
 */

import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import { NavLink, Routes, Route, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { FaAngleDoubleLeft } from 'react-icons/fa';

import 'react-datepicker/dist/react-datepicker.css';

import FrameWrapper from '../../components/Wrappers/FrameWrapper';
// import JMHeader from '../../components/JMHeader';
import ListItem from '../../components/Places/ListItem';
import Form from '../../components/Places/ResvForm';
import Payment from '../../components/Places/ResvPayment';
import BottomBox from '../../components/Size/BottomBox';

const ReservationContainer = styled(FrameWrapper)`
  /* padding: 48px 12px 0 12px; */

  input,
  label {
    font-size: 12px;
  }

  input:not([type='checkbox']),
  select {
    cursor: pointer;
    margin: 8px 0;
    width: 100%;
    padding: 8px 12px;
    font-size: 12px;
    border: 1px solid #dedede;
    border-radius: 4px;
  }

  input:focus,
  select:focus {
    outline: 1px solid var(--color-green-1);
  }

  hr {
    margin: 24px 0;
    border: 1px solid var(--color-gray);
  }
`;

const Reservation = () => {
  const { id, option } = useParams();
  const [{ data, loading, error }] = useAxios(
    `http://localhost:3001/places/${id}`,
  );

  return (
    data && (
      <ReservationContainer>
        {/* <JMHeader>예약하기</JMHeader> */}
        <ListItem item={data} />
        <div className="floating">
          <NavLink to={`/place/${id}/details`} className="iconBox left">
            <FaAngleDoubleLeft className="icon" />
          </NavLink>
        </div>
        <Routes>
          <Route path="" element={<Form id={id} data={data} />} />
          <Route
            path="payment"
            element={<Payment id={id} price={data.price} />}
          />
        </Routes>
        <BottomBox size="72px" />
      </ReservationContainer>
    )
  );
};

export default Reservation;

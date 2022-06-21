import { memo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Stars from '../Common/Stars';
import Price from '../Places/Price';
import Location from '../Places/Location';
import CateWord from '../Places/CateWord';

const ListItemContainer = memo(styled.li`
  cursor: pointer;
  margin: 4px 0;
  padding: 8px;
  display: flex;
  width: 100%;
  height: 80px;
  font-size: 12px;
  border-radius: 4px;
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.1);

  img {
    margin-right: 8px;
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 4px;
  }

  .desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
`);

const ListItem = memo(({ item }) => {
  const navigate = useNavigate();
  const { src, title, loc, cate, score, total, price, id } = item;
  const handleClick = event => {
    navigate(`/place/${event.currentTarget.dataset.id}/details`);
  };

  return (
    <ListItemContainer data-id={id} onClick={handleClick}>
      <img src={src} alt={title} />
      <div className="desc">
        <div className="row">
          <span className="title">{title}</span>
          <CateWord cate={cate} />
        </div>
        <div className="row">
          <Location loc={loc} />
        </div>
        <div className="row">
          <Stars score={score} total={total} className="stars" />
          <Price price={price} />
        </div>
      </div>
    </ListItemContainer>
  );
});

export default ListItem;

/**
 * @filename ListItem.jsx
 * @description 장소 리스트 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Stars from '../Common/Stars';
import MiniPrice from './MiniPrice';
import MiniLocation from './MiniLocation';
import MiniCateWord from './MiniCateWord';

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
          <MiniCateWord cate={cate} />
        </div>
        <div className="row">
          <MiniLocation loc={loc} />
        </div>
        <div className="row">
          <Stars score={score} total={total} className="stars" />
          <MiniPrice price={price} />
        </div>
      </div>
    </ListItemContainer>
  );
});

export default ListItem;

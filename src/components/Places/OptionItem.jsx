/**
 * @filename OptionItem.jsx
 * @description 옵션 정보 및 선택 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

const OptionItemContainer = memo(styled.div`
  pointer-events: ${props => props.freeze && 'none'};
  margin: 12px 0;
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 12px;
  border-radius: 4px;
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.1);
  border: 4px solid
    ${props =>
      props.selected ? 'var(--color-light-green)' : 'var(--color-white)'};

  .imgBox {
    margin-right: 12px;
    width: 84px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .contentBox {
    width: 100%;

    .title {
      font-size: 14px;
      font-weight: 700;
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price {
        color: var(--color-red);
        span {
          margin-right: 4px;
        }
      }

      .count {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 800;
        * {
          box-sizing: content-box;
          padding: 0 4px;
          user-select: none;
          &:hover {
            color: var(--color-green-2);
          }
        }
      }
    }
  }
`);

const OptionItem = memo(({ item, freeze = false }) => {
  const { src, title, desc, min, max } = item;
  const [count, setCount] = useState(0);

  const handleCount = event => {
    if (freeze) return;
    const name = event.target.dataset.name;
    if (name !== '+' && name !== '-') return;
    setCount(count =>
      name === '+' ? count + 1 : name == '-' && count > 1 ? count - 1 : 0,
    );
  };

  return (
    <OptionItemContainer selected={count > 0} freeze={freeze}>
      <div className="imgBox">
        <img src={src} alt={title} />
      </div>
      <div className="contentBox">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <div className="row">
          <p className="price">
            <span>{(+min).toLocaleString()}</span>
            <span>~</span>
            <span>{max && +min !== +max && (+max).toLocaleString()}</span>
          </p>
          <p className="count" onClick={handleCount}>
            <AiOutlineMinusSquare data-name="-" />
            <span>{count}</span>
            <AiOutlinePlusSquare data-name="+" />
          </p>
        </div>
      </div>
    </OptionItemContainer>
  );
});

export default OptionItem;

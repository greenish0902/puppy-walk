/**
 * @filename JSMyPurchaseGoods.jsx
 * @description 구매 내역에 사용되는 상품
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PurchaseGoodsBox = styled.div`
  width: 340px;
  height: 80px;
  background: rgb(127, 127, 127);
  margin: auto;
  margin-bottom: 10px;
  position: relative;

  .imgBox {
    float: left;
    margin-right: 20px;

    img {
      display: block;
      height: 80px;
      width: 80px;
    }
  }

  .pBox {
    float: left;
    p {
      height: 20px;
      line-height: 20px;
    }
  }


  button {
    display: block;
    position: absolute;
    height: 40px;
    width: 100px;
    right: 10px;
    top: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  &:after {
    clear: both;
    content: '';
    float: none;
    display: block;
  }
`
const StateBox = styled.p`
  color: ${({state}) => state === "배송완료" ? 'green' : 'red'};
`

const JSPurchaseGoods = memo(({src, date, title, price, state}) => {
  const navigate = useNavigate()
  const onClickDetail = React.useCallback(()=> {
    navigate(`/purchasedetail/${date}`)
  },[navigate, date])
  return (
    <PurchaseGoodsBox>
      <div className="imgBox">
        <img src={src} alt="img"/>
      </div>
      <div className='pBox'>
        <p>{title}</p>
        <p>{price}</p>
        <p>{date}</p>
        <StateBox state={state}>{state}</StateBox>
      </div>
      <button onClick={onClickDetail} type="button">상세보기</button>
    </PurchaseGoodsBox>
  );
});

export default JSPurchaseGoods;
/**
 * @filename JSCart.jsx
 * @description 장바구니 화면
 * @author 신지섭(pon0304616@gmail.com)
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import useAxios from 'axios-hooks'
import { useNavigate } from 'react-router-dom';

import JMFooter from "../JMFooter";
import JMHeader from "../JMHeader";
import img from '../../assets/img/dog.png';


const CartBox = styled.div`
  width: 360px;
  height: 500px;
  margin: auto;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
  
  .deleteBtn{
    background: #999999;
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100px;
    margin-top: 50px;
    margin-left: 250px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .amount {
    width: 360px;
    height: 30px;
    position: fixed;
    bottom: 80px;
    p {
      text-align: center;
      font-size: 20px;
    }
  }

  .nothingInCart {
    padding-top: 265px;
  }

  .nothingMessage {
    text-align: center;
    line-height: 20px;
    height: 20px;
  }

  .nothingButton {
    display: block;
    margin: 10px auto 0 auto;
    height: 50px;
    width: 120px;
  }

  .cartGoods {
    display: block;
    height: 60px;
    width: 340px;
    background: #999999;
    margin: 0 auto 10px auto;
    input {
      display: block;
      float: left;
      height: 20px;
      width: 20px;
      margin: 20px 20px 20px 10px;
    }

    img {
      display: block;
      height: 60px;
      width: 60px;
      float: left;
      margin-right: 10px;
    }

    .pBox {
      float: left;
      p {
        height: 20px;
        line-height: 20px;
      }
    }

    button {
      float: right;
      margin: 20px 10px 20px 0;
      height: 20px;
      width: 20px;
    }  

    &:after {
      clear: both;
      content: '';
      float: none;
      display: block;
    }
  }
`
const DimBox = styled.div`
  height: 940px;
  width: 360px;
  background: rgba(0,0,0, 0.5);
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 100;

  .moveBtn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 320px;
    background: white;
    text-align: center;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    
    .container {
      margin-top: 50px;
    }
    p {
      margin-bottom: 30px;
    }
    button {
      width: 100px;
      height: 40px;
      border-radius: 5px;
      border: none;
      color: white;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease-in-out;
      }
    }
    .yBtn {
      background: red;
      margin-right: 20px;
    }
    .nBtn {
      background: rgba(127, 127, 127, 0.5);
    }
  }
`
const Cart = memo(() => {
  const navigate = useNavigate();
  const onClickNothing = React.useCallback(() => {
    navigate("/")
  },[navigate])
  const url = "http://localhost:3001/cart"
  const [{data}] = useAxios(url);
  const [{loading}, sendDelete] = useAxios({
    method: 'DELETE'
  }, {
    useCache: false,
    manual: true
  })
  // 삭제이벤트
  const [changeData, setChangeData] = React.useState();
  const [select, setSelect] = React.useState();

  React.useEffect(() => {
    setChangeData(data);
  }, [setChangeData, data]);
  // dim state
  const [dim, setDim] = React.useState('none');
  // id state
  const [id, setId] = React.useState();
  const onClickN = React.useCallback(() => {
    setDim('none')
  },[setDim]);
  const onClickY = React.useCallback((e) => {
    setDim('block')
    if (data) {
      setId(parseInt(e.target.dataset.id))
    }
  },[setDim, setId, data]);
  const onClickCheckbox = React.useCallback((e) => {
    const checkbox = document.querySelectorAll(".checkBox");
    const checkedItem = Array.from(checkbox).filter((v,i) => v.checked)
    const checkedValue = checkedItem.map((v, i) => parseInt(v.value));
    setSelect(checkedValue)
  }, [setSelect])

  // Axios-hooks를 사용한 onClickDelete
  const onClickDelete = React.useCallback(() => {
    (async () => {
      let json = null;

      try {
        const response = await sendDelete({
          method: 'DELETE',
          url: `http://localhost:3001/cart/${id}`
        });
        json = response.data;
      } catch(e) {
        console.error(e);
        window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
      }

      if (json != null) {
        setChangeData(changeData.filter((data) => data.id !== id))
      }
    })();
    
    setDim('none')
  },[id, setDim, setChangeData, sendDelete, changeData])
  const onClickDeleteSelect = React.useCallback(()=> {
    (async () => {
      let json = null;
      try {
        for (let i = 0; i < select.length; i++) {
          const response = await sendDelete({
            method: 'DELETE',
            url: `http://localhost:3001/cart/${select[i]}`
          })
          json = response.data;
        }
      }catch(e){
        console.error(e);
        window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
      }
      if(json != null) {
        setChangeData(changeData.filter((data) => !select.includes(data.id)))
        setSelect();
        window.location.replace('./cart')
      }
    })();
    setDim('none')
  },[setDim, setChangeData, sendDelete, changeData, select, setSelect])
  let total = 0;
  React.useEffect(() => {
    console.log(select);
  },[select]);
  return (
    <>
      <JMHeader>장바구니</JMHeader>
      <DimBox style={{display:`${dim}`}}>
        <div className="moveBtn">
          <div className="container">
            <p>게시물을 <strong>삭제</strong>하시겠습니까?</p>
            <button onClick={ id ? onClickDelete : onClickDeleteSelect} className="yBtn" type="button">네</button>
            <button onClick={onClickN} className="nBtn" type="button">아니요</button>
          </div>
        </div>
      </DimBox>
      <CartBox>
        {
          changeData && changeData.length !== 0 ? (
            <ul>
              <button onClick={ select && select.length !==0 ? onClickY : null} className="deleteBtn" type="button">선택 삭제</button>
              <ul>
                {
                  changeData && changeData.map((v, i) => {
                    total += v.price
                    return (
                      <li key={i} className="cartGoods">
                        <form>
                          <input onClick={onClickCheckbox} unchecked="true" className="checkBox" type="checkbox" value={v.id}/>
                          <img src={img} alt={v.title}/>
                          <div className="pBox">
                            <p>{v.title}</p>
                            <p>{v.count}</p>
                            <p>{v.price}</p>
                          </div>
                        </form>
                        <button data-id={v.id} onClick={onClickY} type="button">X</button>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="amount">
                <p>{total.toLocaleString()}원 &nbsp;&nbsp; + &nbsp;&nbsp; 배송비 = &nbsp;&nbsp; 총 금액</p>
              </div>
            </ul>
          ) : (
            <div className="nothingInCart">
              <p className="nothingMessage">장바구니에 담긴 상품이 없습니다.</p>
              <button onClick={onClickNothing} className='nothingButton' type="button">쇼핑 계속하기</button>
            </div>
          )
        }
      </CartBox>
      <JMFooter/>
    </>
  );
});

export default Cart;
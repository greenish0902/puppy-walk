import { memo } from 'react';
import styled from 'styled-components';

import ButtonWrapper from '../Wrappers/ButtonWrapper';

const TransLayer = memo(styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #00000098;

  .box {
    padding: 12px;
    width: 240px;
    height: 160px;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translate(-50%, -50%);
    background-color: var(--color-white);
    border-radius: 4px;
    z-index: 10000;
    font-size: 14px;

    .msg {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      margin-top: 12px;
      padding: 8px;
      color: var(--color-white);
      background-color: var(--color-green-2);
      border-radius: 4px;
    }
  }
`);

/**
 *
 * @param {boolean} visible 모달창 display 여부
 * @param {string} msg 사용자에게 보여줄 메시지
 * @param {string} btn 컨펌버튼 내용
 * @param {function} handleClick 버튼 onClick 이벤트 함수
 * @returns Modal component
 */

const Modal = ({
  visible,
  msg = 'default message',
  btn = '확인',
  handleClick,
}) => {
  return (
    visible && (
      <TransLayer>
        <div className="box">
          <div className="msg">{msg}</div>
          <ButtonWrapper width="80px" onClick={handleClick}>
            {btn}
          </ButtonWrapper>
        </div>
      </TransLayer>
    )
  );
};

export default Modal;

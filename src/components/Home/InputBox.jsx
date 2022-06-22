/**
 * @filename InputBox.jsx
 * @description label, input 내용을 props로 전달받아 활용하기 위한 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from 'react';
import styled from 'styled-components';

const BoxContainer = memo(styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: bold;
  width: ${props => props.width || '100%'};
  .option {
    font-weight: ${props => (props.option ? '400' : 'bold')};
    color: ${props =>
      props.$option ? 'var(--color-text-gray)' : 'var(--color-green-2)'};
  }
`);

const InputBox = memo(
  ({ label, name, type = 'text', placeholder, option, width }) => {
    return (
      <BoxContainer $option={option} width={width}>
        <label htmlFor={label}>{label}</label>
        <span className="option"> {option ? '(선택)' : '(필수)'}</span>
        {name && (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete="off"
          />
        )}
      </BoxContainer>
    );
  },
);

export default InputBox;

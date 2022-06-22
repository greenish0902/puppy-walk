/**
 * @filename Options.jsx
 * @description 옵션 전체 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import React from 'react';
import styled from 'styled-components';

import OptionItem from './OptionItem';

const OptionsContainer = styled.div`
  padding: 12px;
`;

const Options = ({ options, love }) => {
  return (
    <OptionsContainer>
      <ul>
        {options.map((item, index) => (
          <OptionItem item={item} love={love} key={index} />
        ))}
      </ul>
    </OptionsContainer>
  );
};

export default Options;

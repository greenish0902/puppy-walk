/**
 * @filename MiniPrice.jsx
 * @description 가격정보 UI 컴포넌트
 * @author 서소희 greenish0902@gmail.com
 */

import { memo } from 'react';
import styled from 'styled-components';

const MiniPriceContainer = memo(styled.span`
  display: flex;
  align-items: center;
  span {
    font-weight: 800;
    color: var(--color-mint-green-3);
    word-break: break-all;
  }

  .small {
    margin-left: 4px;
    color: var(--color-text-gray);
    font-size: 8px;
    font-weight: 400;
  }
`);

const MiniPrice = memo(({ price }) => {
  return (
    <MiniPriceContainer>
      <span>₩ {parseInt(price).toLocaleString()}</span>
      <span className="small">/ 일</span>
    </MiniPriceContainer>
  );
});

export default MiniPrice;

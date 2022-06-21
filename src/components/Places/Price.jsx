import { memo } from 'react';
import styled from 'styled-components';

const PriceContainer = memo(styled.span`
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

const Price = memo(({ price }) => {
  return (
    <PriceContainer>
      <span>₩ {parseInt(price).toLocaleString()}</span>
      <span className="small">/ 일</span>
    </PriceContainer>
  );
});

export default Price;

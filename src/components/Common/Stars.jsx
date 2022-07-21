import React from 'react';
import styled from 'styled-components';

import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 8px;
  color: var(--color-text-gray);
  .score {
    color: #f1b100;
    margin-right: 4px;
  }
`;

const Stars = ({ score, total }) => {
  const ratio = score / total;
  const full = Math.floor(ratio * 5);
  const half = ratio * 5 - full > 0.5 ? 1 : 0;

  return (
    <StarsContainer>
      <div className="score">
        {full > 0 &&
          [...new Array(full)].map((_, index) => <FaStar key={index} />)}
        {half > 0 && <FaStarHalfAlt />}
        {5 - full - half > 0 &&
          [...new Array(5 - full - half)].map((_, index) => (
            <FaRegStar key={index} />
          ))}
      </div>
      <p>({score})</p>
    </StarsContainer>
  );
};

export default Stars;

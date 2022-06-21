import React from 'react';
import styled from 'styled-components';

const CategoryItemContainer = styled.li`
  margin: 0 4px 4px 0;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 96px;
  height: 36px;
  font-size: 12px;
  border-radius: 4px;
  background-color: var(--color-light-gray);

  img {
    margin-right: 4px;
    width: 24px;
    height: 24px;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <CategoryItemContainer>
      <img src={item.icon} alt="src" />
      <p>{item.name}</p>
    </CategoryItemContainer>
  );
};

export default CategoryItem;

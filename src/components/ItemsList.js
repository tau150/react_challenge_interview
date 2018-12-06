import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 50%;
  disply: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemsList = ({ itemsList, handleDeleteItem }) => {
  const list =
    itemsList.length > 0 ? (
      itemsList.map(item => {
        return (
          <Item key={item} name={item} handleDeleteItem={handleDeleteItem} />
        );
      })
    ) : (
      <Banner>
        <p>Item´s list is empty</p>
      </Banner>
    );

  return <StyledDiv>{list}</StyledDiv>;
};

export default ItemsList;

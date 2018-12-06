import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border-radius: 5px;
  margin: 1%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: bold;
    margin-left: 3%;
  }

  i {
    margin-right: 20px;
    color: #777;
  }
`;

const Item = ({ name, handleDeleteItem }) => {
  return (
    <StyledDiv>
      <p>{name}</p>
      <i
        className="fa fa-trash-o"
        aria-hidden="true"
        onClick={() => handleDeleteItem(name)}
      />
    </StyledDiv>
  );
};

export default Item;

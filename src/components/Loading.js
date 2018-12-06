import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  top: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;

  i {
    color: #fff;
    font-size: 50px;
  }
`;

const Loading = () => {
  return (
    <StyledDiv>
      <i className="fa fa-spin fa-spinner" aria-hidden="true" />
    </StyledDiv>
  );
};

export default Loading;

import React, { Component } from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  width: 50%;
  background: #fff;
  padding: 6%;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }

  input {
    height: 50px;
    font-size: 22px;
  }

  p {
    color: red;
  }

  .buttons-container {
    margin-top: 5%;
    display: flex;
    justify-content: space-between;

    button {
      width: 20%;
      cursor: pointer;
      background: #fff;
      color: #000;
      border: 1px solid #777;
    }

    .add-button {
      color: #fff;
      background: #cccccc;
      border: none;
    }
  }
`;

class Modal extends Component {
  state = {
    item: null,
    firstTry: true,
    alreadyExists: false,
  };

  handleChangeInput = e => {
    const itemData = e.target.value;

    if (e.target.value !== '') {
      this.setState({ item: itemData, firstTry: false, alreadyExists: false });
    }
  };

  handleClickSaveItem = () => {
    const alreadyExists = this.props.itemsList.some(
      item => item === this.state.item
    );

    if (this.state.item !== null) {
      if (alreadyExists) {
        this.setState({ alreadyExists: true });
        return;
      }
      this.props.handleAddItem(this.state.item);
    } else {
      this.setState({ firstTry: false });
    }
  };

  render() {
    return (
      <Backdrop>
        <ModalBody>
          <h2>Add Item</h2>
          <input onChange={this.handleChangeInput} />
          {this.state.item === null && !this.state.firstTry ? (
            <p>Item can´t be empty</p>
          ) : null}
          {this.state.alreadyExists === true ? (
            <p>Already exists an item with this name</p>
          ) : null}
          <div className="buttons-container">
            <button onClick={this.props.hancleClickCancelAddItem}>
              Cancel
            </button>
            <button className="add-button" onClick={this.handleClickSaveItem}>
              Add
            </button>
          </div>
        </ModalBody>
      </Backdrop>
    );
  }
}

export default Modal;

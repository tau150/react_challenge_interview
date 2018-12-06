import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Counter from "./Counter";
import Modal from "./Modal";
import ItemsList from "./ItemsList";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background: #00a8ff;
    border: none;
    padding: 1%;
    border-radius: 5px;
    color: #fff;
    margin-top: 5%;
  }

  @media (min-width: 768px) {
    h1 {
      text-align: center;
      margin-top: 5%;
      width: 50%;
    }
    button {
      width: 50%;
      font-size: 18px;
    }
  }
`;

class App extends Component {
  state = {
    modalActive: false,
    itemsList: []
  };

  componentDidMount() {
    const preExistedItems = JSON.parse(localStorage.getItem("items"));
    this.setState({ itemsList: preExistedItems });
  }

  hancleClickAddItem = () => {
    this.setState({ modalActive: true });
  };

  hancleClickCancelAddItem = () => {
    this.setState({ modalActive: false });
  };

  handleDeleteItem = itemToDelete => {
    const newItemList = this.state.itemsList.filter(
      item => item !== itemToDelete
    );

    this.setState({ itemsList: newItemList });
  };

  handleAddItem = item => {
    const newItemList = [...this.state.itemsList, item];
    this.setState({ itemsList: newItemList, modalActive: false });
    localStorage.setItem("items", JSON.stringify(newItemList));
  };

  render() {
    const modal = this.state.modalActive ? (
      <Modal
        hancleClickCancelAddItem={this.hancleClickCancelAddItem}
        handleAddItem={this.handleAddItem}
        itemsList={this.state.itemsList}
      />
    ) : null;

    return (
      <StyledDiv>
        <h1>Supermarket List</h1>
        <Counter numberOfItems={this.state.itemsList.length} />
        <ItemsList
          itemsList={this.state.itemsList}
          handleDeleteItem={this.handleDeleteItem}
        />
        <button onClick={this.hancleClickAddItem}>Add Item</button>
        {modal}
      </StyledDiv>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Counter from './components/Counter';
import Modal from './components/Modal';
import ItemsList from './components/ItemsList';
import Loading from './components/Loading';
import { getItems, deleteItem, addItem } from './api';

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
    itemsList: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    getItems().then(items => {
      if (items) {
        this.setState({ itemsList: items, loading: false });
      }
    });
  }

  hancleClickAddItem = () => {
    this.setState({ modalActive: true });
  };

  hancleClickCancelAddItem = () => {
    this.setState({ modalActive: false });
  };

  handleDeleteItem = itemToDelete => {
    this.setState({ loading: true });
    deleteItem().then(response => {
      const newItemList = this.state.itemsList.filter(
        item => item !== itemToDelete
      );
      this.setState({ itemsList: newItemList, loading: false });
      localStorage.setItem('items', JSON.stringify(newItemList));
    });
  };

  handleAddItem = item => {
    this.setState({ loading: true });
    addItem(item).then(response => {
      const newItemList = [...this.state.itemsList, item];
      this.setState({
        itemsList: newItemList,
        modalActive: false,
        loading: false,
      });
      localStorage.setItem('items', JSON.stringify(newItemList));
    });
  };

  render() {
    const modal = this.state.modalActive ? (
      <Modal
        hancleClickCancelAddItem={this.hancleClickCancelAddItem}
        handleAddItem={this.handleAddItem}
        itemsList={this.state.itemsList}
      />
    ) : null;

    const loading = this.state.loading ? <Loading /> : null;

    return (
      <StyledDiv>
        {loading}
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

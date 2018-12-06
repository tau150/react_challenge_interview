export const getItems = () => {
  return new Promise((resolve, reject) => {
    const items = JSON.parse(localStorage.getItem('items'));
    setTimeout(() => resolve(items), 1000);
  });
};

export const deleteItem = () => {
  return new Promise((resolve, reject) => {
    console.log('deleting...');
    setTimeout(() => resolve('item deleted'), 500);
  });
};

export const addItem = item => {
  return new Promise((resolve, reject) => {
    console.log('adding...');
    setTimeout(() => resolve('item added'), 500);
  });
};

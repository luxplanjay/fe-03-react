const isActive = 'localStorage' in window;

const get = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

const set = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

const clear = key => localStorage.removeItem(key);

const publicAPI = {
  isActive,
  get,
  set,
  clear,
};

export default publicAPI;

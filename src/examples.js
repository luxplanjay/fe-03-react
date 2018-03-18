// createStore
const createStore = reducer => {
  let state;
  const listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

// connect
const connect = (mapStateToProps, mapDispatchToProps) => Component =>
  (ConnectedComponent = props => (
    <Component {...props} {...mapStateToProps()} {...mapDispatchToProps()} />
  ));

// thunk
function not_a_thunk(x) {
  // это "thunk", потому что результат выполнения отложен до вызова
  return function thunk() {
    console.log('do stuff now' + x);
  };
}

const a = not_a_thunk(5);

a();

const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }

  return next(action);
};

const thunk = store => next => action =>
  typeof action === 'function' ? action(store.dispatch) : next(action);

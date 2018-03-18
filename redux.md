# Принципы Redux

* Все состояние приложения это один JS объект
* Состояние можно только прочитать (изменять по ссылке запрещено)
* Единсвенный способ изменить состояние это выстрелить действие (action)
* Изменения происходят через чистые функции (reducers)

http://www.dotnetcurry.com/images/reactjs/redux/redux.png

https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966

## Store

JavaScript объект хранящий все состояние приложения и методы работы с состоянием.

```js
const store = {
  state: {},
  getState: () => {},
  dispatch: () => {},
  subscribe: () => {},
};
```

## Reducer

Reducer это функция, которая принимает предыдущее состояние
и объект (action) с изменениями. Возвращает новое состояние.

```js
function reducerFn(state, action) {
  return state;
}
```

## Action

Объект несущий в себе тип дейтсвия и данные для изменения состояния

```js
const action = {
  type: '',
  payload: '',
};
```

## Action Creator

Чистая функция для создания action. Возвращает объект.

```js
const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: todo,
});
```

### Бывают асинхронными

```js
const addTodo = todo => dispatch => {
  dispatch({
    type: 'ADD_TODO',
    payload: todo,
  });
};
```

## Provider

Компонент-обертка. Пробрасывает store на всю глубину приложения используя context. Обычно оборачивает приложение.

## Middleware (прослойка)

Вспомогательный код между dispatch и reducer. Может перехватывать и изменять action по пути.

https://image.slidesharecdn.com/reactjs-reduxadvanced-160718135632/95/workshop-22-reactredux-middleware-15-638.jpg?cb=1470751997

https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966

## Чтиво

* https://github.com/rajdee/redux-in-russian
* https://redux.js.org/
* https://hackernoon.com/thinking-in-redux-when-all-youve-known-is-mvc-c78a74d35133
* https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60
* https://maxfarseer.gitbooks.io/redux-course-ru/content/osnovi_redux.html
* https://daveceddia.com/what-is-a-thunk/
* https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50

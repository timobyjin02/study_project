import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import createSageMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
//  store를 만드는 로직
const create = () => {
  const sageMiddleware = createSageMiddleware();

  const store = createStore(reducer, composeWithDevTools(applyMiddleware(sageMiddleware)))

  sageMiddleware.run(rootSaga);
  
  return store;
}

export default create;
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware             from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga    from '../sagas';

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore();

import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth64871Saga from '../features/EmailAuth64871/redux/sagas';
import CalendarView64869Saga from '../features/CalendarView64869/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth64871Saga,
CalendarView64869Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}
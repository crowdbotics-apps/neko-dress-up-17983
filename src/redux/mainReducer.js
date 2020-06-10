import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth64871Reducer from '../features/EmailAuth64871/redux/reducers';
import CalendarView64869Reducer from '../features/CalendarView64869/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth64871: EmailAuth64871Reducer,
CalendarView64869: CalendarView64869Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});
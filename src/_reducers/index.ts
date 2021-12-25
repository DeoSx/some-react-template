import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';

const rootReducers = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;

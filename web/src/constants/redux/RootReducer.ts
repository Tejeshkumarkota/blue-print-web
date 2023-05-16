import { all } from 'redux-saga/effects'
import { combineReducers } from 'redux'
import * as General from '@/constants/redux/Sagas/GeneralSaga'

export const rootReducer = combineReducers({
    General: General.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
    yield all([
    ])
}

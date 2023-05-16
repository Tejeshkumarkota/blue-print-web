import { Action } from '@reduxjs/toolkit'
import { put, takeLatest } from 'redux-saga/effects'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL
// ** Define API endPoints **/

export interface ActionWithPayload<T> extends Action {
    payload?: T
}

// ** Define Actions "ALL ACTIONS NAMES SHOULD BE UNIQUE!!!!" **

export const actionTypes = {
    OffersRenewlaData: '[OffersRenewlaData] Action',
    ContractsApprovalData: '[ContractsApprovalData] Action',
    PmMakeAnOfferData: '[PmMakeAnOfferData] Action',
    PmMakeAnOfferPopUpData: '[PmMakeAnOfferPopUpData] Action',
    Building: '[Building] Action',
    Pid: '[Pid] Action',
    Notif: '[Notif] Action',
    ContractDetails: '[ContractDetails] Action',
    Permissions: '[Permissions] Action',
}
// ** Define initialGeneralDatas **
const initialGeneralDatasState: IGeneralDatasState = {
    offersRenewlaData: undefined,
}
export interface IGeneralDatasState {
    offersRenewlaData?: ''
}
export const reducer = persistReducer(
    { storage, key: 'General', whitelist: ['building'] },

    (
        state: IGeneralDatasState = initialGeneralDatasState,
        action: ActionWithPayload<IGeneralDatasState>
    ) => {
        switch (action.type) {
            case actionTypes.OffersRenewlaData: {
                const offersRenewlaData = action.payload?.offersRenewlaData
                return { ...state, offersRenewlaData: offersRenewlaData }
            }
            default:
                return state
        }
    }
)

export const actions = {
    offersRenewlaData: (offersRenewlaData: any) => ({
        type: actionTypes.OffersRenewlaData,
        payload: { offersRenewlaData },
    }),
}

export function* GeneralSaga() {
}

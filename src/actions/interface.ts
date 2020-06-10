import { Action, AnyAction } from "react-redux/node_modules/redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Store } from "../types/interfaces";

export type MyThunkAction<ReturnActions, AllActions extends Action> = ThunkAction<
Promise<ReturnActions>,
Store,
undefined,
AllActions
>

export type AnyThunkDispatch = ThunkDispatch<Store, undefined, AnyAction>
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStore } from "./appstore";

export const selectCounterState=createFeatureSelector<AppStore>('Counter')

export const selectCounterValue= createSelector(
    selectCounterState,
    (state:AppStore)=>state.counter
)
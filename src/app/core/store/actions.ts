import { createAction } from "@ngrx/store";

export const incrementer=createAction('[Counter] Incrementer')
export const decrementer=createAction('[Counter] Decrementer')
export const reset=createAction('[Counter] Reset')
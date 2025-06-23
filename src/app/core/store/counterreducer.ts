import { createReducer, on } from "@ngrx/store";
import { initState } from "./appstore";
import { decrementer, incrementer, reset } from "./actions";

export const counterReducer=createReducer(
    initState,
    on(incrementer, (state)=>({...state,counter:state.counter+1})),
    on(decrementer, (state)=>({...state,counter:state.counter-1})),
    on(reset, (state)=>({...state,counter:0})),
)


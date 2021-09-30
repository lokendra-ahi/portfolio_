import { Action } from "@ngrx/store";
import { on } from "@ngrx/store";
import { createReducer } from "@ngrx/store";
import * as actions from '../actions/app.actions'

export interface Game {
  home: number;
  away: number;
}

export const initialState: Game = {
    home: 0,
    away: 0,
  };



  const scoreboardReducer = createReducer(
    initialState,
    on(actions.setScores, state => (
        { ...state, home: state.home + 1 }
        ))
  );
  
  export function reducer(state: Game | undefined, action: Action) {
      console.log('called');
    return scoreboardReducer(state, action);
  }
  
import { createSelector } from '@ngrx/store';
import { Game } from '../reducers/app.reducer';

export const selectFeature = (state: Game) => state;

export const selectHomeCount = createSelector(
  selectFeature,
  (state: any) => state
);
import { Beer } from '@ngpoland/shared';
import { ActionReducer } from '@ngrx/store';
import { BeersActions, BeersActionsUnion } from './beers.actions';

export const beersReducer: ActionReducer<Beer[]> = (
  state: Beer[],
  action: BeersActionsUnion
) => {
  switch (action.type) {
    case BeersActions.ItemsLoaded:
      return action.payload;
    case BeersActions.RemoveBeer:
      return state.filter(beer => beer.id !== action.payload.id);
    case BeersActions.CreateBeer:
      return [...state, action.payload];
    default:
      return state;
  }
};

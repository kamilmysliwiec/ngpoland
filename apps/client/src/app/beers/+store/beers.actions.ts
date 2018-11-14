import { Beer } from '@ngpoland/shared';
import { Action } from '@ngrx/store';

export enum BeersActions {
  ItemsLoaded = '[Beers] Items loaded',
  RemoveBeer = '[Beers] Remove beer',
  CreateBeer = '[Beers] Create beer'
}

export class ItemsLoadedAction implements Action {
  readonly type = BeersActions.ItemsLoaded;

  constructor(public payload: Beer[]) {}
}

export class RemoveBeerAction implements Action {
  readonly type = BeersActions.RemoveBeer;

  constructor(public payload: { id: number }) {}
}

export class CreateBeerAction implements Action {
  readonly type = BeersActions.CreateBeer;

  constructor(public payload: Beer & { id?: number }) {}
}

export type BeersActionsUnion =
  | ItemsLoadedAction
  | RemoveBeerAction
  | CreateBeerAction;

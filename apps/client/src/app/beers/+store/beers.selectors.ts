import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BeersState } from './beers-state.interface';

export const getBeersFeature = createFeatureSelector('beers');

export const getBeers = createSelector(
  getBeersFeature,
  (state: BeersState) => state.entities
);

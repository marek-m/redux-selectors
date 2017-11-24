import {AppStateModel} from './models/app-state.model';
import {MainStateModel} from './models/main-state.model';
import {createSelector} from '@ngrx/store';

/* Main state selector */
export const appState = (app: MainStateModel) => app.state;


export const getEntities = createSelector(
  appState,
  (s: AppStateModel) => s.entities
);

export const getBoldEntities = createSelector(
  getEntities,
  (entities) => entities.map((item) => {
    return { ...item,
            name: `${item.name.toUpperCase()} ++ HELLO ++`
    }})
);

export const getFilter = createSelector(
  appState,
  (s: AppStateModel) => s.filter
);

export const getFilteredEntities = createSelector(
  getBoldEntities,
  getFilter,
  (entities, fil) => {
    return fil ? entities && entities.filter((item) => item.name.includes(fil)) : entities;
  }
);


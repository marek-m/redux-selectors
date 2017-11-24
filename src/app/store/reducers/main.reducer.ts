import {ActionModel} from '../models/action.model';
import {AppStateModel} from '../models/app-state.model';
import {MainActions} from '../actions/main.actions';

const initialState: AppStateModel = {
  entities: [],
  loading: false,
  filter: ''
};

export const reducer = (state: AppStateModel = initialState, action: ActionModel<any>): AppStateModel => {
  switch(action.type) {
    case MainActions.LOAD_REPOS: {
      return {
        ...state,
        loading: true
      };
    }
    case MainActions.LOAD_REPOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        entities: action.payload
      };
    }
    case MainActions.SET_FILTER: {
      return {
        ...state,
        filter: action.payload
      };
    }
    default:
      return state;
  }
};

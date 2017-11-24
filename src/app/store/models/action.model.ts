import {Action} from '@ngrx/store';

export class ActionModel<T> implements Action {
  public payload?: T;
  public type: string;
};

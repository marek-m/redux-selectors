import {ActionModel} from '../models/action.model';
import {RepoModel} from '../models/repo.model';
import {Injectable} from '@angular/core';

@Injectable()
export class MainActions {
  public static readonly LOAD_REPOS = '[Action] LOAD_REPOS';
  public static readonly LOAD_REPOS_SUCCESS = '[Action] LOAD_REPOS_SUCCESS';
  public static readonly LOAD_REPOS_FAILURE = '[Action] LOAD_REPOS_FAILURE';
  public static readonly SET_FILTER = '[Action] SET_FILTER';

  public loadRepos(): ActionModel<null> {
    return {
      type: MainActions.LOAD_REPOS
    };
  }

  public loadReposSuccess(payload: Array<RepoModel>): ActionModel<Array<RepoModel>> {
    return {
      type: MainActions.LOAD_REPOS_SUCCESS,
      payload
    };
  }

  public loadReposFailure(): ActionModel<null> {
    return {
      type: MainActions.LOAD_REPOS_FAILURE
    };
  }

  public setFilter(payload: string): ActionModel<string> {
    return {
      type: MainActions.SET_FILTER,
      payload
    };
  }
}

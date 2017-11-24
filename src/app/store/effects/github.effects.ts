import {Injectable} from '@angular/core';
import {GithubService} from '../github.service';
import {Actions, Effect} from '@ngrx/effects';
import {ActionModel} from '../models/action.model';
import {Observable} from 'rxjs/Observable';
import {MainActions} from '../actions/main.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';

@Injectable()
export class GithubEffects {

  @Effect()
  private loadRepos$: Observable<ActionModel<any>> = this.actions$
    .ofType(MainActions.LOAD_REPOS)
    .switchMap(() => {
      return this.service.getRepos()
        .map((response) => this.actions.loadReposSuccess(response))
        .catch((err) => of(this.actions.loadReposFailure()))
    });

  constructor(private service: GithubService,
              private actions: MainActions,
              private actions$: Actions) {}

};


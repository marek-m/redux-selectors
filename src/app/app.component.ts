import {Component, OnInit} from '@angular/core';
import {MainActions} from './store/actions/main.actions';
import {Store} from '@ngrx/store';
import {RepoModel} from './store/models/repo.model';
import {Observable} from 'rxjs/Observable';
import {getEntities, getFilteredEntities} from './store/index';
import {MainStateModel} from './store/models/main-state.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public repos$: Observable<RepoModel[]>;
  public filter: FormControl;
  constructor(private actions: MainActions,
              private store: Store<MainStateModel>) {
  }

  public ngOnInit() {
    this.filter = new FormControl();

    this.filter.valueChanges.subscribe((value) => {
      this.store.dispatch(this.actions.setFilter(value));
    });

    this.repos$ = this.store.select(getFilteredEntities);
    this.store.dispatch(this.actions.loadRepos());
  }
}

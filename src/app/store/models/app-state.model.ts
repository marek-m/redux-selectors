import {RepoModel} from './repo.model';

export interface AppStateModel {
  entities: RepoModel[];
  filter: string;
  loading: boolean;
}

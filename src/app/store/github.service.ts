import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RepoModel} from './models/repo.model';

@Injectable()

export class GithubService {

  constructor(private http: HttpClient) {}

  public getRepos() {
    return this.http.get<Array<RepoModel>>('https://api.github.com/users/marek-m/repos');
  }
}

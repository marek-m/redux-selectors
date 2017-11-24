import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {GithubService} from './store/github.service';
import {reducer} from './store/reducers/main.reducer';
import {HttpClientModule} from '@angular/common/http';
import {MainActions} from './store/actions/main.actions';
import {GithubEffects} from './store/effects/github.effects';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({state: reducer}),
    EffectsModule.forRoot([GithubEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    GithubService,
    MainActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

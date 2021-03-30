import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {TrialComponent} from './trial/trial.component';
import {BuyPacksComponent} from './buy-packs/buy-packs.component';
import {MarketComponent} from './market/market.component';
import {LearnComponent} from './learn/learn.component';
import {CollectionsComponent} from './collections/collections.component';
import {OpenPacksComponent} from './open-packs/open-packs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'trial', component: TrialComponent},
  {path: 'buyPacks', component: BuyPacksComponent},
  {path: 'market', component: MarketComponent},
  {path: 'learn', component: LearnComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'openPacks', component: OpenPacksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

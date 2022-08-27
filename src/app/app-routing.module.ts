import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFavoriteAccountComponent } from './components/featured-components/add-favorite-account/add-favorite-account.component';

const routes: Routes = [
  { path: '', component: AddFavoriteAccountComponent },
  {
    path: 'add-account',
    component: AddFavoriteAccountComponent,
  },

  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
